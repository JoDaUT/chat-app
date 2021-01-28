import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userCredentials:firebase.auth.UserCredential;
  private _userSource:BehaviorSubject<firebase.User>;
  public readonly user:Observable<firebase.User>;
 // public user:Object;
  constructor(public auth:AngularFireAuth, private _router:Router){
    this._userSource = new BehaviorSubject<firebase.User>(undefined);
    this.user = this._userSource.asObservable();
  }
  loginWithGoogle():void{
    // const auth = this;
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider() )
    .then( res => {
      this._userCredentials = res;
      this._userSource.next(res.user);
     // this.user = res.user;
     // auth.user = res.user;
      this._router.navigate(["/chat"]);
      //console.log('source: ',this._userSource.value);
    } )
    .catch(err=>console.log(err));
  }
  logout(){
    this.auth.signOut().then(res=>{
      //this._userSource.next(undefined);
      this._router.navigate(["/"]);
    },err=>{
      console.log(err);
      this._router.navigate(["/"]);
    })
    return true;
    //tal vez deberia modificar el userSource
  }
  getUserObservable():Observable<Object>{
    return this.user;
  }
  getUser(){
    //console.log('source from get: ',firebase.auth().currentUser);
    // return this._userSource.value;

    return firebase.auth().currentUser;
  }
}
