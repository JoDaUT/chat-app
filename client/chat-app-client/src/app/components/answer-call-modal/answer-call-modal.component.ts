import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import * as $ from 'jquery';
declare const $: any;
import ContactInfo from 'src/app/models/ContactInfo';
import { PeerService } from '../../services/peer-service/peer.service';
declare const Peer: any;
@Component({
  selector: 'answer-call-modal',
  templateUrl: './answer-call-modal.component.html',
  styleUrls: ['./answer-call-modal.component.css']
})
export class AnswerCallModalComponent implements OnInit {
  public entryCall: ContactInfo;
  constructor(private _peer: PeerService, private _router: Router) {
    this.entryCall = new ContactInfo('', '', '', '', 'assets/icons/default-avatar.svg', '');;

  }

  ngOnInit(): void {
    this.listenConnection();
  }
  public async createConn() {
    const peerId = await this._peer.createPeer();
    console.log({ id: peerId });
  }
  public listenConnection() {
    this._peer.receiveConnection().subscribe((id: string) => {
      this._peer.listenUserData(id).subscribe((incomingCallUserData: ContactInfo) => {
        console.log('INCOMING CALL FROM:', incomingCallUserData);
        this.entryCall = incomingCallUserData;
        this.showModal();
      })
    });
  }
  public answerCall() {
    console.log('answer call')
    this._peer.sendStatus(this.entryCall._id, true);
    this._peer.setStreamSettings(this.entryCall._id, this.entryCall, false);
    this._router.navigate(['call']);
  }
  public async denegateCall() {
    console.log('denegate call')
    this._peer.sendStatus(this.entryCall._id, false);
  }
  public showModal() {
    const modal = $('#exampleModal');
    if (modal) {
      modal.modal('show');
    }
  }
  public hideModal() {
    const modal = $('#exampleModal');
    if (modal) {
      modal.modal('hide');
    }
  }
}
