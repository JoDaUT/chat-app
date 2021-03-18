import { Component, OnInit } from '@angular/core';
import ContactInfo from 'src/app/models/ContactInfo';
//import { AuthService } from 'src/app/services/auth.service';
import { ContactSelectedService } from 'src/app/services/contact-selected-service/contact-selected.service';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit {

  public title = 'Sistema de mensajería';
  public contactSelected:ContactInfo;
  
  public user:any;

  constructor(private _contactSelectedService: ContactSelectedService){
    this.contactSelected = new ContactInfo('','','','','assets/icons/default-avatar.svg','');;
  }
  ngOnInit(){

  }
  receiveContact(contact:ContactInfo){
    this._contactSelectedService.updateContactSelected(contact);
  }
}
