import { Component, OnInit } from '@angular/core';
import ContactInfo from 'src/app/models/ContactInfo';

import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userCard:ContactInfo;
  public user:firebase.User;
  constructor(private _auth:AuthService) {
    this.userCard = new ContactInfo('','','','','');
    this.user = undefined;
  }

  ngOnInit(): void {
    this.user = this._auth.getUser();
    this.userCard = new ContactInfo('',this.user.displayName, this.user.email, '', this.user.photoURL);
  }
  loadUserInfo(){
    this.userCard = new ContactInfo('12134','Shiba Inu', 'Dog Breed', 'online', "https://material.angular.io/assets/img/examples/shiba1.jpg"); 
  }

  logout(){
    this._auth.logout();
  }
}
