import { Injectable } from '@angular/core';

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
  constructor(private _auth: AuthService) {
    this.firebaseUser = this._auth.getUser();
    this.userCard = new ContactInfo(this.firebaseUser.uid, this.firebaseUser.displayName, this.firebaseUser.email, '', this.firebaseUser.photoURL, '');
    this._peer = undefined;
    this._outConnection = undefined;
    this._incomeConnection = undefined;
    this.id = undefined;
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
  sendDataFromIncomingConnection(answer: any) {
    console.log({ answer })
    console.log('incomeConn', this._incomeConnection)
    this._incomeConnection.send(answer);
  }
  sendDataFromOutcomingConnection(answer: any) {
    this._outConnection.send(answer);
  }
  listenConnection(): Promise<any> {
    return new Promise((resolve) => {
      this._peer.on('connection', (conn) => {
        this._incomeConnection = conn;
        conn.on('data', function (data) {
          resolve(data);
        });
      });
    })
  }
  makeConnection(id: string, data: any) {
    return new Promise((resolve) => {
      this._outConnection = this._peer.connect(id);
      this._outConnection.on('open', () => {
        console.log('connection open')
        this._outConnection.send(data);
      })
      this._outConnection.on('data', (data) => {
        console.log('data from conn: ', data);
        resolve(data);
      })

    })
  }
}
