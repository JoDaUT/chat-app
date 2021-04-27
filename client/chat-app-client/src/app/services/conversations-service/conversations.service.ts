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
import { MessageNotification } from 'src/app/models/MessageNotification';
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

    this.api = environment.api;
    this.messagesSource = new BehaviorSubject<Array<ChatMessage>>(new Array<ChatMessage>());
    this.currentMessages = this.messagesSource.asObservable();

    this.inbox = new Array<ContactInbox>();
    this.messages = new Array<ChatMessage>();
    this.contactsInfo = new Array<ContactInfo>();
    // this.loadContactsFromAPI();
    // this.handleContactConnection();
    // this.handleContactDisconnection();
    //this.handleContactSelected();
    // this.handleNewMessages();
  }

  // handleContactSelected() {
  //   this._contactSelectedService.currentContact.subscribe(item => {
  //     this.currentContact = item;
  //     //this.updateConversation();
  //   })
  // }
  // loadContactsFromAPI() {
  //   this.getContacts().subscribe(contacts => {
  //     for (const contact of contacts) {
  //       this.addContact(contact);
  //       this.createConversation(contact);
  //     }
  //   })
  // }
  // updateConversation() {
  //   const conversation = this.inbox.find((value: ContactInbox) => value.socketId === this.currentContact.socketId);
  //   if (conversation) {
  //     this.messagesSource.next(conversation.messages);
  //   }
  // }
  sendMessage(message: ChatMessage, receiver: ContactInfo) {
    console.log({sender:this._authService.getUser()});
    console.log({receiver});
    this._socket.emitTo('emit private message', receiver.socketId, message);
  }
  getNewMessagesFromAPI() {
    return this._socket.listen('receive private message');
  }
  // handleNewMessages() {
  //   this.getNewMessagesFromAPI().subscribe(
  //     (data: any) => {
  //       const senderId: string = data.socketId;
  //       const message: ChatMessage = data.msg;
  //       const conversation: ContactInbox = this.inbox.find((value: ContactInbox) => value.socketId === senderId);
  //       conversation.messages.push(message);
  //     }
  //   )
  // }
  getMessageNotifications(): Observable<MessageNotification> {
    return new Observable((Suscriber) => {
      this.getNewMessagesFromAPI().subscribe(
        (data: any) => {
          // const senderId: string = data.socketId;
          // const message: ChatMessage = data.msg;
          //if(this.currentContact.socketId === data.socketId){
            const messageNotification = new MessageNotification();
            messageNotification.id = data.socketId;
            messageNotification.message = data.msg;
  
            Suscriber.next(messageNotification);
          //}

        }
      )
    })
  }
  receiveNewMessages(contact: ContactInfo): Observable<any> {
    return this._socket.listen('receive private message');
  }
  getContacts(stat: number = 0): Observable<any> {
    if (stat === 0) {
      return this._socket.listen('get users');
    }
    else if (stat === 1) {
      this._socket.emit('req get users', undefined);
      return this._socket.listen('res get users');
    }
  }
  // handleContactConnection() {
  //   this._socket.listen('user connect').subscribe((user: any) => {
  //     const contact = this.addContact(user);
  //     this.createConversation(contact);
  //   })
  // }
  // addContact(user: any) {
  //   const socketId = user.socketId;
  //   const contact = user.data;
  //   const contactInfo = new ContactInfo(contact.uid, contact.displayName, contact.email, 'online', contact.photoURL, socketId);
  //   this.contactsInfo.push(contactInfo);
  //   return contactInfo;
  // }
  // createConversation(contact: ContactInfo) {
  //   const conversation: ContactInbox = new ContactInbox();
  //   conversation.socketId = contact.socketId;
  //   conversation.messages = new Array<ChatMessage>();
  //   this.inbox.push(conversation);
  // }
  // handleContactDisconnection() {
  //   this._socket.listen('user disconnect').subscribe((user: any) => {
  //     const index = this.contactsInfo.findIndex((value: ContactInfo) => value.socketId === user.socketId)
  //     this.deleteContactFormList(index);
  //     //this.deleteConversation(index);
  //   })
  // }
  // deleteContactFormList(index) {
  //   if (index > -1) {
  //     this.contactsInfo.splice(index, 1);
  //   }
  // }
  // deleteConversation(index) {
  //   if (index > -1) {
  //     this.inbox.splice(index, 1);
  //   }
  // }

  async getConversation(contactUid:string){
    
    const currentUser = this._authService.getUser();
    try{
      const idToken = await currentUser.getIdToken(/* forceRefresh */ true)
      if(idToken){
        // console.log({idToken});
  
        //const contactUid = this.currentContact.uid;
        console.log({uid: contactUid});
        const httpOptions = {
          headers: new HttpHeaders({
            'token-access': idToken
          })
        }
        const url = this.api.url+'/conversation/'+contactUid
        // console.log({url});
        return this._http.get(url, httpOptions);
      }
    }
    catch(err){
      console.error(err)
    }
    // .catch(function(error) {
    //   throw new Error('cant get token id')
    // });
  }
}
