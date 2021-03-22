import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ChatMessage } from '../../models/ChatMessage';
import ContactInbox from '../../models/ContactInbox';
import ContactInfo from '../../models/ContactInfo';
import { ContactSelectedService } from '../contact-selected-service/contact-selected.service';

import { io } from 'socket.io-client/build/index';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth-service/auth.service';
import { SocketService } from '../socket-service/socket.service';
@Injectable({
  providedIn: 'root'
})
export class ConversationsService {
  public currentContact: ContactInfo;
  public messages: Array<ChatMessage>;

  private messagesSource: BehaviorSubject<Array<ChatMessage>>;
  public currentMessages: Observable<Array<ChatMessage>>;

  public inbox: Array<ContactInbox>;
  public contactsInfo: ContactInfo[];
  public api: { url: string };

  constructor(private _contactSelectedService: ContactSelectedService,
    private _http: HttpClient,
    private _authService: AuthService,
    private _socket: SocketService
  ) {
    this.messagesSource = new BehaviorSubject<Array<ChatMessage>>(new Array<ChatMessage>());
    this.currentMessages = this.messagesSource.asObservable();

    this.inbox = new Array<ContactInbox>();
    this.messages = new Array<ChatMessage>();
    this.contactsInfo = new Array<ContactInfo>();
    this.loadContactsFromAPI();
    this.handleContactConnection();
    this.handleContactDisconnection();
    this.handleContactSelected();
    this.handleNewMessages();
  }

  handleContactSelected(){
    this._contactSelectedService.currentContact.subscribe(item => {
      this.currentContact = item;
      this.updateConversation();
    })
  }
  loadContactsFromAPI() {
    this.getContacts().subscribe(contacts => {
      for (const contact of contacts) {
        this.addContact(contact);
        this.createConversation(contact);
      }
    })
  }
  updateConversation() {
    const conversation = this.inbox.find((value: ContactInbox) => value.socketId === this.currentContact.socketId);
    console.log('alerta:', conversation);
    if (conversation) {
      this.messagesSource.next(conversation.messages);
    }
  }
  sendMessage(message: ChatMessage, receiver: ContactInfo) {
    //console.log('msg to send: ', message, 'to: ', receiver.socketId);
    this._socket.emitTo('emit private message', receiver.socketId, message);
  }
  getNewMessagesFromAPI() {
    return this._socket.listen('receive private message');
  }
  handleNewMessages() {
    this.getNewMessagesFromAPI().subscribe(
      (data: any) => {
        const senderId: string = data.socketId;
        const message: ChatMessage = data.msg;
        //console.log('new message:', message)
        const conversation:ContactInbox = this.inbox.find((value: ContactInbox) => value.socketId === senderId);
        //console.log(conversation);

        conversation.messages.push(message);
      }
    )
  }
  getMessageNotifications():Observable<string>{
    return new Observable( (Suscriber)=>{
      this.getNewMessagesFromAPI().subscribe(
        (data: any) => {
          const senderId: string = data.socketId;
          const message: ChatMessage = data.msg;
          Suscriber.next(senderId);
        }
      )
    })
  }
  receiveNewMessages(contact: ContactInfo): Observable<any> {
    return this._socket.listen('receive private message');
  }
  getContacts(stat:number = 0): Observable<any> {
    if(stat===0){
      return this._socket.listen('get users');
    }
    else if(stat ===1){
      this._socket.emit('req get users', undefined);
      console.log('entre a else stat 1');
      return this._socket.listen('res get users');
    }
  }
  handleContactConnection() {
    this._socket.listen('user connect').subscribe((user: any) => {
      const contact = this.addContact(user);
      this.createConversation(contact);
    })
  }
  addContact(user: any) {
    const socketId = user.socketId;
    const contact = user.data;
    //('user conect: ', user.socketId);
    const contactInfo = new ContactInfo(contact.uid, contact.displayName, contact.email, 'online', contact.photoURL, socketId);
    this.contactsInfo.push(contactInfo);
    return contactInfo;
  }
  createConversation(contact: ContactInfo) {
    const conversation: ContactInbox = new ContactInbox();
    conversation.socketId = contact.socketId;
    conversation.messages = new Array<ChatMessage>();
    this.inbox.push(conversation);
  }
  handleContactDisconnection() {
    this._socket.listen('user disconnect').subscribe((user: any) => {
      //console.log('user disconnect: ', user);
      const index = this.contactsInfo.findIndex((value: ContactInfo) => value.socketId === user.socketId)
      //console.log(index);
      this.deleteContactFormList(index);
      this.deleteConversation(index);
    })
  }
  deleteContactFormList(index) {
    if (index > -1) {
      this.contactsInfo.splice(index, 1);
    }
  }
  deleteConversation(index) {
    if (index > -1) {
      this.inbox.splice(index, 1);
    }
  }
}
