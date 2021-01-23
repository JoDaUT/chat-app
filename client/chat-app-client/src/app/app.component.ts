import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatSectionComponent } from './components/chat-section/chat-section.component';
import Contact from './models/ContactInbox';
import ContactInfo from './models/ContactInfo';
import { ContactSelectedService } from './services/contact-selected.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'Sistema de mensajería';
  public contactSelected:ContactInfo;
  //@ViewChild('chatSection') chatSection:ChatSectionComponent;
  constructor(private _contactSelectedService: ContactSelectedService){
    this.contactSelected = new ContactInfo('','','','','assets/icons/default-avatar.svg');;
  }
  ngOnInit(){
  }
  receiveContact(contact:ContactInfo){
    //this.chatSection.contact = contact;
    //console.log(contact);
    this._contactSelectedService.updateContactSelected(contact);
  }
}
