import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  public loginClicked:boolean;
  //public user:firebase.User;
  constructor(private _router:Router, private _auth:AuthService) {

  }

  ngOnInit(): void {
    this.loginClicked = false;
    // this._auth.getUser().subscribe(
    //   res=>{
    //     this.user = res;
    //     console.log('user from login: ',this.user);
    //     if(this.user){
    //       this._router.navigate(["/chat"]);
    //     }
    //   },err=>{
    //     console.log(err);
    //   })
  }
  turnOnSpinner(){
    this.loginClicked = true;
  }
  googleLogIn(){
    this.turnOnSpinner();
    //this._router.navigate(["/chat"]);
    this._auth.loginWithGoogle();
                              // .then(userCredentials=>{
                              //   console.log(userCredentials);
                              // }).catch(error=>{
                              //   console.log(error);
                              // })

  }
  logout(){
   this._auth.logout();
  }
}
