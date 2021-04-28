import { Injectable, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import ContactInfo from 'src/app/models/ContactInfo';
import { StreamInfo } from 'src/app/models/StreamInfo';
import { AuthService } from '../auth-service/auth.service';

declare const Peer: any;

@Injectable({
  providedIn: 'root'
})
export class CallService {
  public id: string;
  private _peer: any;
  private firebaseUser: any;
  private userCard: ContactInfo;
  private _calls = {};
  private _streamInfo: StreamInfo;

  constructor(private _auth: AuthService) {
    this.firebaseUser = this._auth.getUser();
    this.userCard = new ContactInfo(this.firebaseUser.uid, this.firebaseUser.displayName, this.firebaseUser.email, '', this.firebaseUser.photoURL, '');
    this._peer = undefined;
    this.id = undefined;
    this._streamInfo = new StreamInfo('', undefined, false, undefined)
    this.createPeer();
  }
  createPeer() {
    // this._peer = new Peer(this.userCard.uid);
    this._peer = new Peer(this.userCard.uid);
    this._peer.on('open', (id) => {
      this.id = id;
      console.log('peer id is: ',this.id);
    })
  }
  
  setStreamSettings(streamInfo:StreamInfo) {
    this._streamInfo = streamInfo;
  }
  getStreamSettings() {
    return this._streamInfo;
  }
  sendStream(id: string, stream: any) {
    this._calls[id] = this._peer.call(id, stream);
  }
  receiveStream(id: string):Promise<any> {
    return new Promise( (resolve)=>{
      this._calls[id].on('stream', (remoteStream)=>{
        console.log('remote stream from service: ');
        resolve(remoteStream);
      })
    })
  }
  listenStreamCall(id: string, stream: any) {
    return new Promise( (resolve)=>{
      this._peer.on('call', (conn) => {
        console.log('call peer');
        this._calls[id] = conn;
        this._calls[id].answer(stream);
        resolve(true);
      })
    })
  }
  closeCall(id:string){
    if(this._calls[id]){
      this._calls[id].close();
      //delete this._calls[id];
    }
  }
}