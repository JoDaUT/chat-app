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
  private _conn = {};

  constructor(private _auth: AuthService){
    this.firebaseUser = this._auth.getUser();
    this.userCard = new ContactInfo(this.firebaseUser.uid, this.firebaseUser.displayName, this.firebaseUser.email, '', this.firebaseUser.photoURL, '');
    this._peer = undefined;
    this._outConnection = undefined;
    this._incomeConnection = undefined;
    this.id = undefined;

    this.createPeer();
  }
  createPeer() {
      this._peer = new Peer(this.userCard._id);
      this._peer.on('open', (id) => {
        this.id = id;
      })
  }
  makeConnection(id: string):Promise<Boolean>{
    return new Promise((resolve) => {
        const connection = this._peer.connect(id);
        connection.on('open', ()=>{
          this._conn[id] = connection;
          resolve(true);
        })
    })
  }
  
  // listenFromConnection(id:string):Observable<any>{
  //     if(this._conn[id]){
  //       return new Observable( (Subscriber)=>{
  //         this._conn[id].on('data', (data:ContactInfo) => {
  //           Subscriber.next(data);
  //         })
  //       })
  //     }
  //     else{
  //       throw new Error('listenFromConnection: Connection not existed');
  //     }
  // }
  listenUserData(id:string):Observable<any>{
    if(this._conn[id]){
      return new Observable( (Subscriber)=>{
        this._conn[id].on('data', (userData:ContactInfo) => {
          Subscriber.next(userData);
        })
      })
    }
    else{
      throw new Error('listenFromConnection: Connection not existed');
    }
  }
  listenStatus(id:string):Promise<boolean>{
    return new Promise( (resolve, reject)=>{
      if(this._conn[id]){
        this._conn[id].on('data', (status:boolean) => {
          resolve(status);
        })
      }
      else{
        reject(new Error('listenFromConnection: Connection not existed'));
      }
    })
  }
  receiveConnection(){
    return new Observable( (Subscriber)=>{
      this._peer.on('connection', (conn)=>{
          console.log(conn);
          const id = conn.peer;
          if(id){
            console.log('SI ES CONN.ID: ',id);
            this._conn[id] = conn;
            Subscriber.next(id);
          }
          else{
            throw new Error('conn.id no tiene el id');
          }
      })
    })
  }
  sendUserData(id:string, userData:ContactInfo){
    this.sendToConnection(id, userData);
  }
  sendStatus(id:string, status:boolean){
    this.sendToConnection(id, status);
  }
  private sendToConnection(id:string, data:any){
    if(this._conn[id]){
      this._conn[id].send(data);
    }
    else{
      throw new Error('sendToConnection: Connection not existed');
    }
  }
  closeConnection(id:string){
    if(this._conn[id]){
      this._conn[id].close();
    }
  }
}