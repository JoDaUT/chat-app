import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, Input,OnChanges, DoCheck} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessage } from 'src/app/models/ChatMessage';
import ContactInbox from 'src/app/models/ContactInbox';
import ContactInfo from 'src/app/models/ContactInfo';
import { ConversationsService } from 'src/app/services/conversations.service';
import {ContactSelectedService} from '../../services/contact-selected.service'

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

  public inboxMessages:Array<ContactInbox>;
  @ViewChild('messageSection') messageSection:ElementRef;

  constructor(private _contactSelectedService:ContactSelectedService, private _conversationsService:ConversationsService) {
    this.messages = new Array<ChatMessage>();

    this.messageToSend = '';

    this.inboxMessages = new Array<ContactInbox>();
  }

  ngOnInit(): void {
    this._contactSelectedService.currentContact.subscribe( item =>{
      this.contact = item;
    })
    //update conversation
    this._conversationsService.currentMessages.subscribe( msg=>{
      //console.log(msg)
      this.messages = msg;
    })
  }
  ngDoCheck(){
  }
  ngAfterViewChecked() {
    this.scrollToTheEnd();
    
  }

  handleSelection(event:any) {
    //console.log(event.char);
    this.messageToSend += event.char;
    //console.log(this.messageToSend);
  }
  handleSubmit(form:NgForm){
    if(this.messageToSend.length && this.contact._id){
      //console.log('submit');
      this.messages.push(new ChatMessage(this.messageToSend,new Date(), 0));
      //console.log('messageSection:',this.messageSection.nativeElement);
      this.scrollToTheEnd();
      
      form.reset();
      this.messageToSend = '';
    }
    
  }
  scrollToTheEnd(){
    this.messageSection.nativeElement.scrollTop = this.messageSection.nativeElement.scrollHeight;
  }
  loadMessages(){
    // this.messages = new Array<ChatMessage>();
    // this.messages.push(new ChatMessage("This one adds a right triangle on the left, flush at the top by using .tri-right and .left-top to specify the location.", new Date(), 0));
    // this.messages.push(new ChatMessage("helo im ok 😍😍😍", new Date(),1));
    // this.messages.push(new ChatMessage("bye 😎😎", new Date(),0));
    // this.messages.push(new ChatMessage("Veniam nisi quis duis magna exercitation excepteur amet excepteur occaecat. 🍕🍕🚓🚗🏳‍🌈", new Date(),1));
    // this.messages.push(new ChatMessage("Commodo culpa fugiat exercitation non amet minim id quis est incididunt aliquip fugiat dolore. Adipisicing laborum occaecat elit duis consequat. Dolore nisi aliqua ea ea minim et. Magna eiusmod deserunt sunt in duis reprehenderit voluptate velit minim pariatur aute. Mollit dolor 💛💚💖", new Date(),1));
    // this.messages.push(new ChatMessage("helo im ok 😍😍😍", new Date(),1));
    // this.messages.push(new ChatMessage("This one adds a right triangle on the left, flush at the top by using .tri-right and .left-top to specify the location.", new Date(), 0));
    // this.messages.push(new ChatMessage("helo im ok 😍😍😍", new Date(),1));
    // this.messages.push(new ChatMessage("bye 😎😎", new Date(),0));
    // this.messages.push(new ChatMessage("Veniam nisi quis duis magna exercitation excepteur amet excepteur occaecat. 🍕🍕🚓🚗🏳‍🌈", new Date(),1));
    // this.messages.push(new ChatMessage("Commodo culpa fugiat exercitation non amet minim id quis est incididunt aliquip fugiat dolore. Adipisicing laborum occaecat elit duis consequat. Dolore nisi aliqua ea ea minim et. Magna eiusmod deserunt sunt in duis reprehenderit voluptate velit minim pariatur aute. Mollit dolor 💛💚💖", new Date(),1));
    // this.messages.push(new ChatMessage("helo im ok 😍😍😍", new Date(),1));

  }
}
