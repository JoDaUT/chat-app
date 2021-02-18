import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, Input,OnChanges, DoCheck} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessage } from 'src/app/models/ChatMessage';
import ContactInbox from 'src/app/models/ContactInbox';
import ContactInfo from 'src/app/models/ContactInfo';
import { AuthService } from 'src/app/services/auth.service';
import { ConversationsService } from 'src/app/services/conversations.service';
import {ContactSelectedService} from '../../services/contact-selected.service'

import firebase from 'firebase/app';

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
            private _auth:AuthService) {
    this.messages = new Array<ChatMessage>();

    this.messageToSend = '';

    this.inboxMessages = new Array<ContactInbox>();
  }

  ngOnInit(): void {
    this.firebaseUser = this._auth.getUser();
    this.userCard = new ContactInfo('',this.firebaseUser.displayName, this.firebaseUser.email, '', this.firebaseUser.photoURL);
    
    this._contactSelectedService.currentContact.subscribe( item =>{
      this.contact = item;
    })
    //update conversation
    this._conversationsService.currentMessages.subscribe( msg=>{
      this.messages = msg;
    })
  }
  ngDoCheck(){
  }
  ngAfterViewChecked() {
    this.scrollToTheEnd();
  }

  handleSelection(event:any) {
    this.messageToSend += event.char;
  }
  handleSubmit(form:NgForm){
    if(this.messageToSend.length && this.contact._id){
      this.messages.push(new ChatMessage(this.messageToSend,new Date(), 0));
      this.scrollToTheEnd();
      form.reset();
      this.messageToSend = '';
    }
    
  }
  scrollToTheEnd(){
    this.messageSection.nativeElement.scrollTop = this.messageSection.nativeElement.scrollHeight;
  }
  loadMessages(){
  }
}
