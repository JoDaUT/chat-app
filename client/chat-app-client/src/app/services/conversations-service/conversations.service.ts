import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ChatMessage } from '../../models/ChatMessage';
import ContactInbox from '../../models/ContactInbox';
import ContactInfo from '../../models/ContactInfo';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth-service/auth.service';
import { SocketService } from '../socket-service/socket.service';
import { MessageNotification } from 'src/app/models/MessageNotification';
@Injectable({
  providedIn: 'root'
})
export class ConversationsService {
  public currentContact: ContactInfo;
  public messages: Array<ChatMessage>;

  private messagesSource: BehaviorSubject<Array<ChatMessage>>;
  public currentMessages: Observable<Array<ChatMessage>>;

  public inbox: Array<ContactInbox>;
  public contactsInfo: ContactInfo[];
  public api: { url: string };

  constructor(
    private _http: HttpClient,
    private _authService: AuthService,
    private _socket: SocketService
  ) {

    this.api = environment.api;
    this.messagesSource = new BehaviorSubject<Array<ChatMessage>>(new Array<ChatMessage>());
    this.currentMessages = this.messagesSource.asObservable();

    this.inbox = new Array<ContactInbox>();
    this.messages = new Array<ChatMessage>();
    this.contactsInfo = new Array<ContactInfo>();
  }
  sendMessage(message: ChatMessage, receiver: ContactInfo) {
    console.log({sender:this._authService.getUser()});
    console.log({receiver});
    this._socket.emitTo('emit private message', receiver.socketId, message);
  }
  getNewMessagesFromAPI() {
    return this._socket.listen('receive private message');
  }
  getMessageNotifications(): Observable<MessageNotification> {
    return new Observable((Suscriber) => {
      this.getNewMessagesFromAPI().subscribe(
        (data: any) => {
            const messageNotification = new MessageNotification();
            messageNotification.id = data.socketId;
            messageNotification.message = data.msg;
  
            Suscriber.next(messageNotification);
        }
      )
    })
  }
  receiveNewMessages(contact: ContactInfo): Observable<any> {
    return this._socket.listen('receive private message');
  }
  getContacts(stat: number = 0): Observable<any> {
    if (stat === 0) {
      return this._socket.listen('get users');
    }
    else if (stat === 1) {
      this._socket.emit('req get users', undefined);
      return this._socket.listen('res get users');
    }
  }
  async getConversation(contactUid:string){
    
    const currentUser = this._authService.getUser();
    try{
      const idToken = await currentUser.getIdToken(/* forceRefresh */ true)
      if(idToken){
        console.log({uid: contactUid});
        const httpOptions = {
          headers: new HttpHeaders({
            'token-access': idToken
          })
        }
        const url = this.api.url+'/conversation/'+contactUid
        return this._http.get(url, httpOptions);
      }
    }
    catch(err){
      console.error(err)
    }
  }
}
