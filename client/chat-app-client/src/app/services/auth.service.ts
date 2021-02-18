import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment'

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userCredentials: firebase.auth.UserCredential;
  private _userSource: BehaviorSubject<firebase.User>;
  public readonly user: Observable<firebase.User>;
  private url: string;
  constructor(public auth: AngularFireAuth,
    private _router: Router,
    private _http: HttpClient,
  ) {
    this._userSource = new BehaviorSubject<firebase.User>(undefined);
    this.user = this._userSource.asObservable();
    this.url = environment.api.url;
  }
  loginWithGoogle(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        this._userCredentials = res;
        this._userSource.next(res.user);
        this._router.navigate(["/chat"]);
        console.log('credentials: ', this._userCredentials);
        console.log('user: ', res.user);

        var id_token = this.getUser().getIdToken(false).then(
          token => { console.log(token) },
          err => console.log('token access error: ', err));
        // res.user.getIdToken().then(token_id => {
        //   const tokenId = token_id;
        //   this.connectToAPI(tokenId).subscribe(res => {
        //     console.log('RES LOGIN: ', res);
        //   },
        //     err => console.log('err: ', err));
        // }, err => { console.log("error token: ", err) })

      })
      .catch(err => console.log(err));
  }
  connectToAPI(tokenId) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this._http.post(this.url + '/login', { token: tokenId }, httpOptions);
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
