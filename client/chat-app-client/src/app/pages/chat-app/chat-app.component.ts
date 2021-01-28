import { Component, OnInit } from '@angular/core';
import ContactInfo from 'src/app/models/ContactInfo';
//import { AuthService } from 'src/app/services/auth.service';
import { ContactSelectedService } from 'src/app/services/contact-selected.service';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit {

  public title = 'Sistema de mensajería';
  public contactSelected:ContactInfo;
  public user:any;
  //@ViewChild('chatSection') chatSection:ChatSectionComponent;
  constructor(private _contactSelectedService: ContactSelectedService){
    this.contactSelected = new ContactInfo('','','','','assets/icons/default-avatar.svg');;
  }
  ngOnInit(){
    // this._auth.getUser().subscribe(
    //   res=>{
    //     this.user = res;
    //     console.log('user: ',this.user);
    //   },err=>{
    //     console.log(err);
    //   })
  }
  receiveContact(contact:ContactInfo){
    //this.chatSection.contact = contact;
    //console.log(contact);
    this._contactSelectedService.updateContactSelected(contact);
  }
}
