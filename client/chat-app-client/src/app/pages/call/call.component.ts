import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PeerService } from '../../services/peer-service/peer.service';
import ContactInfo from '../../models/ContactInfo';
import { Stopwatch } from 'src/app/helpers/Stopwatch';
import { Router } from '@angular/router';
import { StreamInfo } from '../../models/StreamInfo';
import { SocketService } from '../../services/socket-service/socket.service';
import { redirectLoggedInTo } from '@angular/fire/auth-guard';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit, AfterViewInit,OnDestroy {
  @ViewChild('contactVideo') contactVideo: ElementRef;
  streamInfo: StreamInfo;
  contact: ContactInfo;
  public stopwatch: Stopwatch;
  stream: MediaStream;
  constructor(private _peer: PeerService, 
              private _router:Router,
              private _socket:SocketService) {
    this.stopwatch = new Stopwatch();
  }
  ngOnDestroy(): void {
    this._peer.closeCall(this.contact._id);
    this.stopStreamedVideo(this.contactVideo)
  }
  ngAfterViewInit(): void {
    this.initLocalStream();
    // this._peer.listenStatus(this.contact._id).then((value:boolean)=>{
    //   console.log('recibir flag call ended');
    //   this.endCall(false);
    // })
    this._socket.listen('end call signal').subscribe( (socketId:string)=>{
      console.log('end call signal');
      if(this.contact.socketId === socketId){
        console.log('end call signal if');
        this.endCall(false);
      }
    })
  }

  ngOnInit(): void {
    this.streamInfo = this._peer.getStreamSettings();
    console.log('streamInfo: ',this.streamInfo);
    if (this.streamInfo) {
      console.log(this.streamInfo)
      this.contact = this.streamInfo.contact;
    }
    this.startTimer();
  }
  initLocalStream() {

    const { sender } = this.streamInfo;
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      this.stream = stream;
      
      console.log('id: ', this.contact._id);
      if (sender) {
        this._peer.sendStream(this.contact._id, stream);

        this._peer.receiveStream(this.contact._id).then((remoteStream) => {
          this.addVideo(remoteStream, { muted: false });
        }).catch(err => console.error(err));
      }
      else {
        this._peer.listenStreamCall(this.contact._id, stream).then((res) => {
          this._peer.receiveStream(this.contact._id).then((remoteStream) => {
            console.log('receive stream from caller', remoteStream);
            this.addVideo(remoteStream, { muted: false });
          }).catch(err => console.error(err));

        })


      }
    }).catch(err => {
      console.error(err);
      alert('Media devices not available');
      this._router.navigate(["/chat", "1"]);
      // this.endCall(false);
    });
  }
  addVideo(remoteStream: unknown, options: { muted: false }) {
    const video = this.contactVideo.nativeElement
    video.srcObject = remoteStream;
    video.muted = options.muted;
    video.onloadedmetadata = function (e) {
      video.play();
    }
  }
  startTimer() {
    this.stopwatch.start();
  }
  stopTimer() {
    this.stopwatch.stop();
  }
  endCall(sendStatus:boolean = true) {
    this.stream.getAudioTracks().forEach(function (track) {
        track.stop();
    });
    this.stream.getVideoTracks().forEach(function (track) { //in case... :)
        track.stop();
    });
    this.stopTimer();
    if(sendStatus){
      //this._peer.sendStatus(this.contact._id, false);
      console.log('end call emit:',this.contact.socketId);
      this._socket.emit('end call', this.contact.socketId);
    }
    this._router.navigate(["/chat", "1"]);
  }
  stopStreamedVideo(video:ElementRef) {
    const videoElem = video.nativeElement;
    const stream = videoElem.srcObject;
    const tracks = stream?.getTracks();
    if(tracks){

      tracks.forEach(function(track) {
        track.stop();
      });
      videoElem.srcObject = null;
    }
  }

}
