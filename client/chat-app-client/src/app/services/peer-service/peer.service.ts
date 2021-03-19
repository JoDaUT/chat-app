import { Injectable, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import ContactInfo from 'src/app/models/ContactInfo';
import { AuthService } from '../auth-service/auth.service';

declare const Peer: any;

@Injectable({
  providedIn: 'root'
})
export class PeerService {
  public id: string;
  private _peer: any;
  private firebaseUser: any;
  private userCard: ContactInfo;
  private _outConnection: any;
  private _incomeConnection: any;
  // public callAllowed:Observable<boolean>;
  // private callAllowedsource: BehaviorSubject<any>;
  constructor(private _auth: AuthService){
    this.firebaseUser = this._auth.getUser();
    this.userCard = new ContactInfo(this.firebaseUser.uid, this.firebaseUser.displayName, this.firebaseUser.email, '', this.firebaseUser.photoURL, '');
    this._peer = undefined;
    this._outConnection = undefined;
    this._incomeConnection = undefined;
    this.id = undefined;
    // this.callAllowedsource = new BehaviorSubject(undefined);
    // this.callAllowed = this.callAllowedsource.asObservable();
  }
  createPeer(): Promise<string> {
    return new Promise((resolve) => {
      this._peer = new Peer(this.userCard._id);
      this._peer.on('open', (id) => {
        this.id = id;
        resolve(id);
      })
    })

  }
  async sendDataFromIncomingConnection(answer: any) {
    console.log({ answer })
    console.log('incomeConn', this._incomeConnection)
    this._incomeConnection.send(answer);
    return 0;
  }
  sendDataFromOutcomingConnection(answer: any) {
    this._outConnection.send(answer);
  }
  listenConnection(): Observable<any> {
    return new Observable( (Subscriber)=>{
      this._peer.on('connection', (conn) => {
        this._incomeConnection = conn;
        conn.on('data', function (data) {
          Subscriber.next(data);
        });
      });
    })
  }

  makeConnection(id: string, data: any) {
    return new Promise((resolve) => {
      if(id !== this._outConnection?.id){
        this._outConnection = this._peer.connect(id);
        console.log('entre a make conn');
        this._outConnection.on('open', () => {
          console.log('connection open')
          this._outConnection.send(data);
          console.log('data sended');
        })

      }
      else{
        console.log('entre al else');
        this._outConnection.send(data);
      }
      this._outConnection.on('data', (data) => {
        console.log('data from conn: ', data);
        resolve(data);
      })

    })
  }

  public listenClosedIncomingConnection():Promise<string>{
    return new Promise((resolve)=>{
      this._incomeConnection.on('close', ()=>{
        resolve('incoming connection closed');
      })
    });
  }
  public listenClosedOutcomingConnection():Promise<string>{
    return new Promise((resolve)=>{
      this._outConnection.on('close', ()=>{
        resolve('outcoming connection closed');
      })
    });
  }
  public async closeOutComingConnection(){
    this._outConnection.close();
    return 'outcoming connection closed';
  }
  public async  closeIncomingConnection(){
    this._incomeConnection.close();
    //console.log('incoming connection closed');
    return 'incoming connection closed';
  }
}
