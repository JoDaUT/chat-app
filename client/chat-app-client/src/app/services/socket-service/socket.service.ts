import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {io} from 'socket.io-client/build/index';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth-service/auth.service';
import ContactInfo from '../../models/ContactInfo';

@Injectable({
  providedIn: 'root'
})
export class SocketService{
  disconnect() {
    this._socket.disconnect();
  }
  public api:{url:string};
  private _socket:any;

  constructor(private _authService:AuthService) {
    this.api = environment.api;
    this._socket = io(this.api.url+'/chat');

    const user = this._authService.getUser();
    const userFiltered: ContactInfo = new ContactInfo(user.uid, user.displayName, user.email, 'online', user.photoURL, undefined);
    console.log({userFiltered});
    this.emit('user', userFiltered);
  }
  listen(eventName:string):Observable<any>{
    return new Observable( (Suscriber)=>{
      this._socket.on(eventName, (data)=>{
        Suscriber.next(data);
      })
    })
  }

  emit(eventName:string, data:any){
    this._socket.emit(eventName, data);
  }
  emitTo(eventName:string, socketIdFromReceiver:string, data){
    this._socket.emit(eventName,socketIdFromReceiver,data);
  }
}
