import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  public loginClicked:boolean;
  constructor(private _router:Router, private _auth:AuthService) {}

  ngOnInit(): void {
    this.loginClicked = false;
  }
  turnOnSpinner(){
    this.loginClicked = true;
  }
  googleLogIn(){
    this.turnOnSpinner();
    this._auth.loginWithGoogle();
  }
  logout(){
   this._auth.logout();
  }
}
