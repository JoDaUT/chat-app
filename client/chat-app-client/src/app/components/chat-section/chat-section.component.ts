import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, Input,OnChanges, DoCheck} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessage } from 'src/app/models/ChatMessage';
import ContactInbox from 'src/app/models/ContactInbox';
import ContactInfo from 'src/app/models/ContactInfo';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { ConversationsService } from 'src/app/services/conversations-service/conversations.service';
import {ContactSelectedService} from '../../services/contact-selected-service/contact-selected.service'
// import * as Peer from 'peerjs';
import firebase from 'firebase/app';
import { SocketService } from 'src/app/services/socket-service/socket.service';
import { PeerService } from '../../services/peer-service/peer.service';
import { Router} from '@angular/router';
declare var Peer:any;
declare var $:any;
@Component({
  selector: 'chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.css']
})
export class ChatSectionComponent implements OnInit, AfterViewChecked, DoCheck  {
  public contact: ContactInfo;
  public messages: Array<ChatMessage>;
  public dates:Array<Date>;

  public toggled: boolean = false;
  public messageToSend:string;

  public firebaseUser:firebase.User;
  public userCard:ContactInfo;

  public inboxMessages:Array<ContactInbox>;
  @ViewChild('messageSection') messageSection:ElementRef;

  constructor(private _contactSelectedService:ContactSelectedService, 
            private _conversationsService:ConversationsService, 
            private _auth:AuthService,
            private _socket:SocketService,
            private _peer:PeerService,
            private _router:Router
            ) {
    this.messages = new Array<ChatMessage>();

    this.messageToSend = '';

    this.inboxMessages = new Array<ContactInbox>();
  }

  ngOnInit(): void {
    this.firebaseUser = this._auth.getUser();
    this.userCard = new ContactInfo(this.firebaseUser.uid,this.firebaseUser.displayName, this.firebaseUser.email, '', this.firebaseUser.photoURL,'');
    
    this.handleContactSelected();
    this._conversationsService.currentMessages.subscribe( msg=>{
      console.log('get new messages');
      this.messages = msg;
    })
    
  }
  ngDoCheck(){
  }
  ngAfterViewChecked() {
    this.scrollToTheEnd();
  }
  handleContactSelected(){
    this._contactSelectedService.currentContact.subscribe( item =>{
      this.contact = item;
      console.log('contact selected: ', this.contact.socketId);
    })
  }
  handleSelection(event:any) {
    this.messageToSend += event.char;
  }
  handleSubmit(form:NgForm){
    if(this.messageToSend.length && this.contact._id){
      const message:ChatMessage = new ChatMessage(this.messageToSend,new Date(), 0);
      this.messages.push(message);
      const msgToSend:ChatMessage = new ChatMessage(this.messageToSend,new Date(), 1);
      
      //for the receiver itll be type 1
      this._conversationsService.sendMessage(msgToSend, this.contact);
      this.scrollToTheEnd();
      form.reset();
      this.messageToSend = '';
    }
    
  }
  handleNewMessages(){
    this._conversationsService.receiveNewMessages(this.contact).subscribe(
      (data:any)=>{
        const senderId:string = data.socketId;
        const message:ChatMessage = data.msg;
        console.log('new message:',message)
        this.messages.push(message);
      }
    )
  }
  scrollToTheEnd(){
    this.messageSection.nativeElement.scrollTop = this.messageSection.nativeElement.scrollHeight;
  }
  sendCallRequest(){

  }
  makeAVideoCall(){
    console.log('make a video call')
  }
  async makeACall(){
    //const peerId = await this._peer.createPeer();
    const peerId = this._peer.id;
    console.log('id from chat section: ',peerId)
    console.log('make conn with: ',this.contact._id);
    this._peer.makeConnection(this.contact._id, this.userCard).then( (answer:boolean)=>{
      console.log({answer});
      if(answer){
        this.handleCallAllowed();
      }
      else{
        this.handleCallDenegated();
      }
    })
  }
  public handleCallAllowed(){
    this._router.navigate(['call']);
  }
  public handleCallDenegated(){
    $('#callDenegated').modal('show');
  }
  public async closeConnection(){
    //const result = await this._peer.closeOutComingConnection();
    //console.log({result});
    this._peer.listenClosedOutcomingConnection().then( res=>console.log(res));
  }
}
