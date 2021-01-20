import { Component, OnInit } from '@angular/core';
import ContactInfo from 'src/app/models/ContactInfo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userCard:ContactInfo;
  constructor() {
    this.userCard = new ContactInfo('','','','','');
  }

  ngOnInit(): void {
    this.loadUserInfo();
  }
  loadUserInfo(){
    this.userCard = new ContactInfo('12134','Shiba Inu', 'Dog Breed', 'online', "https://material.angular.io/assets/img/examples/shiba1.jpg");
  }
}
