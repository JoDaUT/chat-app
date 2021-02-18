import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {NgForm} from '@angular/forms';
import ContactInfo from 'src/app/models/ContactInfo';
import { ConversationsService } from 'src/app/services/conversations.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() public contactsInfo:Array<ContactInfo>;
  @Output() public contactSelected = new EventEmitter<ContactInfo>();
  constructor(private _conversationsService:ConversationsService) {
    this.contactsInfo = new Array<ContactInfo>();
  }

  ngOnInit(): void {
    this.loadContacts();
    //console.log('contacts from sidebar: ',this.contactsInfo);
  }

  onSubmit(form:NgForm): void{
    console.log('search form send');
  }
  loadContacts(){
    this._conversationsService.loadContacts();
    this.contactsInfo = this._conversationsService.getContacts();
    //console.log('contacts from server: ',this.contactsInfo);
  }
  notify(contact:ContactInfo){
    this.contactSelected.emit(contact);
  }

}
