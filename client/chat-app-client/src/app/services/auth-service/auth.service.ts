import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';

import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment'

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userCredentials: any;
  private _userSource: BehaviorSubject<any>;
  private _accessToken: string;
  private _tokenId: string;

  public readonly user: Observable<any>;
  private url: string;
  constructor(public auth: AngularFireAuth,
    private _router: Router,
    private _http: HttpClient,
  ) {
    this._userSource = new BehaviorSubject<any>(undefined);
    this.user = this._userSource.asObservable();
    this.url = environment.api.url;

  }
  loginWithGoogle(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        this._userCredentials = res.credential;
        this._accessToken = this._userCredentials.accessToken;
        this._userSource.next(res.user);
        this._router.navigate(["/chat", "0"]);
        this.getUser().getIdToken().then(token => {
          this._tokenId = token;
        }, err => {
          console.log('get token error: ', err)
        })

      })
      .catch(err => console.log(err));
  }
  connectToAPI() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this._http.post(this.url + '/login', { token: this._tokenId, accessToken: this._accessToken, user: this.getUser() }, httpOptions);
  }
  logout() {
    this.auth.signOut().then(res => {
      this._router.navigate(["/"]);
    }, err => {
      console.log(err);
      this._router.navigate(["/"]);
    })
    return true;
    //tal vez deberia modificar el userSource
  }
  getUserObservable(): Observable<Object> {
    return this.user;
  }
  getUser() {
    return firebase.auth().currentUser;
  }
}
