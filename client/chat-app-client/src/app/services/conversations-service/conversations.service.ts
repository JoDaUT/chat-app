import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ChatMessage } from '../../models/ChatMessage';
import ContactInbox from '../../models/ContactInbox';
import ContactInfo from '../../models/ContactInfo';
import { ContactSelectedService } from '../contact-selected-service/contact-selected.service';

import {io} from 'socket.io-client/build/index';
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

  public inbox:Array<ContactInbox>;

  public api:{url:string};
 
  constructor(private _contactSelectedService: ContactSelectedService,
              private _http:HttpClient,
              private _authService:AuthService,
              private _socket:SocketService
              ) {
    this.messagesSource = new BehaviorSubject<Array<ChatMessage>>(new Array<ChatMessage>());
    this.currentMessages = this.messagesSource.asObservable();

    this.inbox = new Array<ContactInbox>();
    
    this.messages = new Array<ChatMessage>();

    this.messages.push(new ChatMessage("This one adds a right triangle on the left, flush at the top by using .tri-right and .left-top to specify the location.", new Date(), 0));
    this.messages.push(new ChatMessage("helo im ok 😍😍😍", new Date(), 1));
    this.messages.push(new ChatMessage("bye 😎😎", new Date(), 0));
    this.messages.push(new ChatMessage("Veniam nisi quis duis magna exercitation excepteur amet excepteur occaecat. 🍕🍕🚓🚗🏳‍🌈", new Date(), 1));

    this.messages.push(new ChatMessage("Commodo culpa fugiat exercitation non amet minim id quis est incididunt aliquip fugiat dolore. Adipisicing laborum occaecat elit duis consequat. Dolore nisi aliqua ea ea minim et. Magna eiusmod deserunt sunt in duis reprehenderit voluptate velit minim pariatur aute. Mollit dolor 💛💚💖", new Date(), 1));
    this.messages.push(new ChatMessage("helo im ok 😍😍😍", new Date(), 1));
    this.messages.push(new ChatMessage("This one adds a right triangle on the left, flush at the top by using .tri-right and .left-top to specify the location.", new Date(), 0));
    this.messages.push(new ChatMessage("helo im ok 😍😍😍", new Date(), 1));
    this.messages.push(new ChatMessage("bye 😎😎", new Date(), 0));
    this.messages.push(new ChatMessage("Veniam nisi quis duis magna exercitation excepteur amet excepteur occaecat. 🍕🍕🚓🚗🏳‍🌈", new Date(), 1));
    this.messages.push(new ChatMessage("Commodo culpa fugiat exercitation non amet minim id quis est incididunt aliquip fugiat dolore. Adipisicing laborum occaecat elit duis consequat. Dolore nisi aliqua ea ea minim et. Magna eiusmod deserunt sunt in duis reprehenderit voluptate velit minim pariatur aute. Mollit dolor 💛💚💖", new Date(), 1));
    this.messages.push(new ChatMessage("helo im ok 😍😍😍", new Date(), 1));

    this._contactSelectedService.currentContact.subscribe(item => {
      this.currentContact = item;
      this.updateConversation();
    })
    
  }

  updateConversation() {
    // if (this.messages.length && this.currentContact._id) {
    //   const found = this.inbox.find(element =>element.contactInfo.socketId === this.currentContact.socketId);
    //   if(!found.messages){
    //     found.messages = [this.messages.pop(), this.messages.pop()];
    //   }
    //   this.messagesSource.next(found.messages);
    // }
    // else {
    //   this.messagesSource.next(new Array<ChatMessage>());
    // }

  }
  sendMessage(message:ChatMessage, receiver:ContactInfo){
    console.log('msg to send: ', message, 'to: ',receiver.socketId);
    this._socket.emitTo('emit private message', receiver.socketId, message);
  }
  receiveNewMessages():Observable<any>{
    return this._socket.listen('receive private message');
  }
  getContacts():Observable < any >{
    return this._socket.listen('get users');
  }
  
}
