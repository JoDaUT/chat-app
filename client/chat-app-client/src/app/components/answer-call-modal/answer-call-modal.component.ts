import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import * as $ from 'jquery';
declare const $: any;
import ContactInfo from 'src/app/models/ContactInfo';
import { CallService } from '../../services/call-service/call.service';
import { SocketService } from '../../services/socket-service/socket.service';
import { StreamInfo } from '../../models/StreamInfo';
declare const Peer: any;
@Component({
  selector: 'answer-call-modal',
  templateUrl: './answer-call-modal.component.html',
  styleUrls: ['./answer-call-modal.component.css']
})
export class AnswerCallModalComponent implements OnInit {
  public entryCall: ContactInfo;
  constructor(private _peer: CallService, 
              private _router: Router,
              private _socket:SocketService) {
    this.entryCall = new ContactInfo('', '', '', '', 'assets/icons/default-avatar.svg', '');;
  }

  ngOnInit(): void {
    this.listenConnection();
  }
  public async createConn() {
    const peerId = await this._peer.createPeer();
  }
  public listenConnection() {
    this._socket.listen('listen call request').subscribe( (data:any)=>{
      const senderInfo:ContactInfo = data.senderInfo;
      const callOptions = data.callOptions;
      console.log('listen Call Request: ',{senderInfo, callOptions});
      this.entryCall = senderInfo;
      this.showModal();
    })
  }
  public answerCall() {
    console.log('answer call')
    const callAllowed = true;
    const receiverId = this.entryCall.socketId;
    console.log('send call answer',{callAllowed, receiverId});
    this._socket.emit('send call answer', {callAllowed, receiverId});

    const streamInfo = new StreamInfo(this.entryCall._id, this.entryCall, false, true);
    this._peer.setStreamSettings(streamInfo);
    this._router.navigate(['call']);
  }
  public async denegateCall() {
    //this._peer.sendStatus(this.entryCall._id, false);
    const callAllowed = false;
    const receiverId = this.entryCall.socketId;
    this._socket.emit('send call answer', {callAllowed, receiverId});

  }
  public showModal() {
    const modal = $('#answerCallModal');
    if (modal) {
      modal.modal('show');
    }
  }
  public hideModal() {
    const modal = $('#answerCallModal');
    if (modal) {
      modal.modal('hide');
    }
  }
}
