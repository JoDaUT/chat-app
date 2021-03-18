import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
//import * as $ from 'jquery';
declare var $ : any;
import ContactInfo from 'src/app/models/ContactInfo';
import { PeerService } from '../../services/peer-service/peer.service';
declare var Peer:any;
@Component({
  selector: 'answer-call-modal',
  templateUrl: './answer-call-modal.component.html',
  styleUrls: ['./answer-call-modal.component.css']
})
export class AnswerCallModalComponent implements OnInit {
  public entryCall:ContactInfo;
  constructor(private _peer:PeerService, private _router:Router) {
    this.entryCall = new ContactInfo('','juan','tu amigo','','assets/icons/default-avatar.svg','');;
    
  }

  ngOnInit(): void {
    this.createConn();
    this.listenConn();
  }
  public async createConn(){
    const peerId = await this._peer.createPeer();
    console.log({id: peerId});
  }
  public listenConn(){
    this._peer.listenConnection().then( (incomingCallUserData:ContactInfo)=>{
      console.log('INCOMING CALL FROM:', incomingCallUserData);
      this.entryCall = incomingCallUserData;
      this.showModal();
    })
  }
  public answerCall(){
    console.log('answer call')
    this._peer.sendDataFromIncomingConnection(true);
    this._router.navigate(['call']);
  }
  public denegateCall(){
    console.log('denegate call')
  }
  public showModal(){
    const modal = $('#exampleModal');
    if (modal) {
      modal.modal('show');
    }
  }
  public hideModal(){
    const modal = $('#exampleModal');
    if (modal) {
      modal.modal('hide');
    }
  }
}
