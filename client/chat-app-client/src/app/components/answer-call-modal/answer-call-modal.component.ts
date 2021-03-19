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
    this.entryCall = new ContactInfo('','','','','assets/icons/default-avatar.svg','');;
    
  }

  ngOnInit(): void {
    this.createConn();
    this.listenConn();

  }
  // listenAnswerDenegated() {
  //   this._peer.getCallAllowed().subscribe( (res:boolean)=>{

  //   })
  // }
  public async createConn(){
    const peerId = await this._peer.createPeer();
    console.log({id: peerId});
  }
  public listenConn(){
    this._peer.listenConnection().subscribe( (incomingCallUserData:ContactInfo)=>{
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
  public async denegateCall(){
    console.log('denegate call')
    const status = await this._peer.sendDataFromIncomingConnection(false);
    console.log({status});
    // const result = await this._peer.closeIncomingConnection();
    // console.log({result});
    
    
    //const result = await this._peer.closeIncomingConnection();
    const res = await this._peer.listenClosedIncomingConnection();
    console.log({res});
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
