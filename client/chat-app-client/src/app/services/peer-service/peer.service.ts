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
  private _conn = {};
  private _streamInfo: { id: string; contact: ContactInfo; sender: boolean };

  constructor(private _auth: AuthService) {
    this.firebaseUser = this._auth.getUser();
    this.userCard = new ContactInfo(this.firebaseUser.uid, this.firebaseUser.displayName, this.firebaseUser.email, '', this.firebaseUser.photoURL, '');
    this._peer = undefined;
    this.id = undefined;

    this.createPeer();
  }
  createPeer() {
    this._peer = new Peer(this.userCard._id);
    this._peer.on('open', (id) => {
      this.id = id;
    })
  }
  makeConnection(id: string): Promise<Boolean> {
    return new Promise((resolve) => {
      const connection = this._peer.connect(id);
      connection.on('open', () => {
        this._conn[id] = connection;
        resolve(true);
      })
    })
  }
  listenUserData(id: string): Observable<any> {
    if (this._conn[id]) {
      return new Observable((Subscriber) => {
        this._conn[id].on('data', (userData: ContactInfo) => {
          Subscriber.next(userData);
        })
      })
    }
    else {
      throw new Error('listenFromConnection: Connection not existed');
    }
  }
  listenStatus(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this._conn[id]) {
        this._conn[id].on('data', (status: boolean) => {
          resolve(status);
        })
      }
      else {
        reject(new Error('listenFromConnection: Connection not existed'));
      }
    })
  }
  receiveConnection() {
    return new Observable((Subscriber) => {
      this._peer.on('connection', (conn) => {
        console.log(conn);
        const id = conn.peer;
        if (id) {
          console.log('SI ES CONN.ID: ', id);
          this._conn[id] = conn;
          Subscriber.next(id);
        }
        else {
          throw new Error('conn.id no tiene el id');
        }
      })
    })
  }
  sendUserData(id: string, userData: ContactInfo) {
    this.sendToConnection(id, userData);
  }
  sendStatus(id: string, status: boolean) {
    this.sendToConnection(id, status);
  }
  private sendToConnection(id: string, data: any) {
    if (this._conn[id]) {
      this._conn[id].send(data);
    }
    else {
      throw new Error('sendToConnection: Connection not existed');
    }
  }
  closeConnection(id: string) {
    if (this._conn[id]) {
      this._conn[id].close();
    }
  }

  setStreamSettings(id: string, contact: ContactInfo, sender: boolean) {
    this._streamInfo = { id, contact, sender };
  }
  getStreamSettings() {
    return this._streamInfo;
  }
  sendStream(id: string, stream: any) {
    this._conn[id] = this._peer.call(id, stream);
    console.log('send stream from caller', stream);
  }
  receiveStream(id: string):Promise<any> {
    return new Promise( (resolve)=>{
      this._conn[id].on('stream', (remoteStream)=>{
        console.log('receiveStream from service: ',remoteStream);
        resolve(remoteStream);
      })
    })
    // return new Observable((Subscriber) => {
    //   this._conn[id].on('stream', (remoteStream) => {
    //     console.log('receiveStream from service: ', remoteStream);
    //     Subscriber.next(remoteStream);
    //   })
    // })
  }
  listenStreamCall(id: string, stream: any) {
    return new Promise( (resolve)=>{

      this._peer.on('call', (conn) => {
        console.log('call detected');
        this._conn[id] = conn;
        this._conn[id].answer(stream);
        resolve(true);
      })
    })
  }
}