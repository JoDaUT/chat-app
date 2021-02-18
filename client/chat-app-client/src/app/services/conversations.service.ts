import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChatMessage } from '../models/ChatMessage';
import ContactInbox from '../models/ContactInbox';
import ContactInfo from '../models/ContactInfo';
import { ContactSelectedService } from './contact-selected.service';

import {io} from 'socket.io-client/build/index';
import { environment } from 'src/environments/environment';
//import { Socket } from 'ngx-socket-io';

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
  private _socket:any;

  constructor(private _contactSelectedService: ContactSelectedService,
              //private _socket: Socket
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
    this.api = environment.api;
    this._socket = io(this.api.url+'/chat');

    this.emit('token-access',1234);
    this.listen('get my user').subscribe( res=>{console.log('my usr: ',res)});
  }
  listen(eventName:string){
    return new Observable( (Suscriber)=>{
      this._socket.on(eventName, (data)=>{
        Suscriber.next(data);
      })
    })
  }
  emit(eventName:string, data:any){
    this._socket.emit(eventName, data);
  }
  updateConversation() {
    if (this.messages.length && this.currentContact._id) {
      const found = this.inbox.find(element =>element.contactInfo._id === this.currentContact._id);
      if(!found.messages){
        found.messages = [this.messages.pop(), this.messages.pop()];
      }
      this.messagesSource.next(found.messages);
    }
    else {
      this.messagesSource.next(new Array<ChatMessage>());
    }

  }
  sendMessage(message:ChatMessage){
    console.log('message send',message);
  }
  loadContacts(){
    const contactInfo1:ContactInfo = new ContactInfo('1','Shiba Inu', 'Dog Breed', 'online', "https://material.angular.io/assets/img/examples/shiba1.jpg");
    const contactInfo2:ContactInfo = new ContactInfo('2','Pancho Inu', 'Dog Breed', 'online', "https://material.angular.io/assets/img/examples/shiba2.jpg");
    const contactInfo3:ContactInfo = new ContactInfo('3','David Inu', 'Dog Breed', 'online', "https://material.angular.io/assets/img/examples/shiba1.jpg");
    const contactInfo4:ContactInfo = new ContactInfo('4','Carlitos Inu', 'Dog Breed', 'online', "https://material.angular.io/assets/img/examples/shiba2.jpg");
    const contactInfo5:ContactInfo = new ContactInfo('5','Daniel Inu', 'Dog Breed', 'online', "https://material.angular.io/assets/img/examples/shiba1.jpg");
    

    const contactInbox1:ContactInbox = new ContactInbox();
    contactInbox1.contactInfo = contactInfo1;

    const contactInbox2:ContactInbox = new ContactInbox();
    contactInbox2.contactInfo = contactInfo2;

    const contactInbox3:ContactInbox = new ContactInbox();
    contactInbox3.contactInfo = contactInfo3;

    const contactInbox4:ContactInbox = new ContactInbox();
    contactInbox4.contactInfo = contactInfo4;

    const contactInbox5:ContactInbox = new ContactInbox();
    contactInbox5.contactInfo = contactInfo5;

    this.inbox.push(contactInbox1);
    this.inbox.push(contactInbox2);
    this.inbox.push(contactInbox3);
    this.inbox.push(contactInbox4);
    this.inbox.push(contactInbox5);
  }
  getContacts():Array<ContactInfo>{
    const contacts:Array<ContactInfo> = new Array<ContactInfo>();
    for(let item of this.inbox){
      contacts.push(item.contactInfo);
    }
    //console.log('contacts in server: ',contacts);
    return contacts;
  }
}
