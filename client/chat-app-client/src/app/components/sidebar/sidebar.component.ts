import { Component, Input, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import ContactInfo from 'src/app/models/ContactInfo';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() public contactsInfo:Array<ContactInfo>;
  constructor() {
    this.contactsInfo = new Array<ContactInfo>();
    // this.contact = new ContactInfo('Shiba Inu', 'Dog Breed Patata Patata Patata Patata Dog Breed Patata Patata Patata Patata', 'online', "https://material.angular.io/assets/img/examples/shiba1.jpg");
  }

  ngOnInit(): void {
    this.loadContacts();
    console.log('contacts from sidebar: ',this.contactsInfo);
  }

  onSubmit(form:NgForm): void{
    console.log('search form send');
  }
  loadContacts(){
    const contactInfo:ContactInfo = new ContactInfo('12134','Shiba Inu', 'Dog Breed', 'online', "https://material.angular.io/assets/img/examples/shiba1.jpg");
    
    for(let i=0; i<4; i++){
      this.contactsInfo.push(contactInfo);
    }
  }
}
