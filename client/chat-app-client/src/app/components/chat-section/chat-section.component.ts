import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, Input, OnChanges, DoCheck, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessage } from 'src/app/models/ChatMessage';
import ContactInbox from 'src/app/models/ContactInbox';
import ContactInfo from 'src/app/models/ContactInfo';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { ConversationsService } from 'src/app/services/conversations-service/conversations.service';
import { ContactSelectedService } from '../../services/contact-selected-service/contact-selected.service'
// import * as Peer from 'peerjs';
import firebase from 'firebase/app';
import { SocketService } from 'src/app/services/socket-service/socket.service';
import { CallService } from '../../services/call-service/call.service';
import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';
import { CallOptions, StreamInfo } from '../../models/StreamInfo';
import { MessageNotification } from '../../models/MessageNotification';
import { Subscription } from 'rxjs';
declare const Peer: any;
declare const $: any;
@Component({
  selector: 'chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.css']
})
export class ChatSectionComponent implements OnInit, AfterViewChecked, OnDestroy {
  public contact: ContactInfo;
  public messages: Array<ChatMessage>;
  public dates: Array<Date>;

  public toggled: boolean = false;
  public messageToSend: string;

  public firebaseUser: firebase.User;
  public userCard: ContactInfo;
  public messageNotificationSubscription:Subscription
  public inboxMessages: Array<ContactInbox>;
  @ViewChild('messageSection') messageSection: ElementRef;
  contactSelectedSubscription: Subscription;
  
  constructor(private _contactSelectedService: ContactSelectedService,
    private _conversationsService: ConversationsService,
    private _auth: AuthService,
    private _socket: SocketService,
    private _peer: CallService,
    private _router: Router
  ) {
    this.messages = new Array<ChatMessage>();

    this.messageToSend = '';

    this.inboxMessages = new Array<ContactInbox>();

    this.contact = new ContactInfo('','','','','assets/icons/default-avatar.svg','');
  }
  ngOnDestroy(): void {
    this.contactSelectedSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.firebaseUser = this._auth.getUser();
    this._socket.emit('req get my user', undefined);
    this._socket.listen('res get my user').subscribe( myUser=>{
      const {socketId} = myUser;
      this.userCard = new ContactInfo(this.firebaseUser.uid, this.firebaseUser.displayName, this.firebaseUser.email, 'online', this.firebaseUser.photoURL, socketId);
    })

    this.handleContactSelected();
  }
  ngAfterViewChecked() {
    this.scrollToTheEnd();
  }

  async getCurrentConversations(){
    const contactUid = this.contact.uid;
    console.log('get data from: ', this.contact);
    const request = await this._conversationsService.getConversation(contactUid)
    if(request)
    {
      request.subscribe( (conversation:ChatMessage[])=>{
        console.log(conversation);
        this.messages = conversation;
      },
      error=>console.error(error))
    }
  }
  handleMessageNotifications(){
    if(this.messageNotificationSubscription)
    {
      this.messageNotificationSubscription.unsubscribe();
    }
    this.messageNotificationSubscription = this._conversationsService.getMessageNotifications().subscribe( (messageNotification:MessageNotification)=>{
      const message:ChatMessage = messageNotification.message;
      console.log({currentContact:this.contact});
      console.log({socketId:messageNotification.id});
      if(this.contact.socketId === messageNotification.id){
        console.warn('equals');
        this.messages.push(message);
      }
    }, err=>{
      console.error(err)
    })
  }
  handleContactSelected() {
    const observer = {
      next: (contact:ContactInfo)=>{
        this.contact = contact;
        console.log('next from chat section: ',this.contact);
        this.getCurrentConversations();
        this.handleMessageNotifications();
      },
      error: (error)=>console.error(error),
      complete: ()=>console.log('subcription finalized')
    }
    this.contactSelectedSubscription = this._contactSelectedService.contactSelected.subscribe(observer)

  }
  handleSelection(event: any) {
    this.messageToSend += event.char;
  }
  handleSubmit(form: NgForm) {
    if (this.messageToSend.length && this.contact.uid) {
      const message: ChatMessage = new ChatMessage(this.messageToSend, new Date(), 1);
      this.messages.push(message);
      const msgToSend: ChatMessage = new ChatMessage(this.messageToSend, new Date(), 0);

      //for the receiver itll be type 1
      this._conversationsService.sendMessage(msgToSend, this.contact);
      this.scrollToTheEnd();
      form.reset();
      this.messageToSend = '';
    }

  }
  scrollToTheEnd() {
    this.messageSection.nativeElement.scrollTop = this.messageSection.nativeElement.scrollHeight;
  }
  makeAVideoCall() {
    const callOptions = new CallOptions(true, true);
    const streamInfo = new StreamInfo(this.contact.uid, this.contact, true, callOptions);
    this._peer.setStreamSettings(streamInfo)
    this._router.navigate(["call"]);
  }
  //estos tres
  //se puede saber cual es el contacto por el contact selected
  makeACall(){
    const callOptions = new CallOptions(true, false);
    const streamInfo = new StreamInfo(this.contact.socketId, this.contact, true, callOptions);
    // const streamInfo = new StreamInfo(this.contact.uid, this.contact, true, callOptions);
    this._peer.setStreamSettings(streamInfo)
    this._router.navigate(["call"]);
  }

}
