import { Component, OnInit } from '@angular/core';
import Contact from './models/ContactInbox';
import ContactInfo from './models/ContactInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'Sistema de mensajería';
  //public contactsInfo:Array<ContactInfo>;
  constructor(){
    //this.contactsInfo = new Array<ContactInfo>();
  }
  ngOnInit(){
   //this.loadContacts();
   // console.log('contacts from app: ',this.contactsInfo);
  }
  // loadContacts(){
  //   const contactInfo:ContactInfo = new ContactInfo('Shiba Inu', 'Dog Breed', 'online', "https://material.angular.io/assets/img/examples/shiba1.jpg");
    
  //   for(let i=0; i<4; i++){
  //     this.contactsInfo.push(contactInfo);
  //   }
  // }
}
