import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { CallService } from '../../services/call-service/call.service';
import ContactInfo from '../../models/ContactInfo';
import { Stopwatch } from 'src/app/helpers/Stopwatch';
import { Router } from '@angular/router';
import { StreamInfo, CallOptions } from '../../models/StreamInfo';
import { SocketService } from '../../services/socket-service/socket.service';
import { ContactSelectedService } from 'src/app/services/contact-selected-service/contact-selected.service';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Subscription } from 'rxjs';

declare const $:any;

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit,AfterViewInit,OnDestroy {
  @ViewChild('videoContainer') videoContainer: ElementRef<HTMLDivElement>;
  streamInfo: StreamInfo | undefined;
  contact: ContactInfo;
  public stopwatch: Stopwatch;
  stream: MediaStream;
  userCard: ContactInfo;
  firebaseUser: any;
  getMyUserSubscription: Subscription;
  contactSelectedSubscription: Subscription;
  listenCallAnswerSubscription: Subscription;
  endCallSignalSubscription: Subscription;
  
  public callStarted:boolean;
  videoOptions: { width: number; height: number; };
  constructor(private _callService: CallService, 
              private _router:Router,
              private _socket:SocketService,
              private _contactSelectedService: ContactSelectedService,
              private _auth: AuthService) {
    this.stopwatch = new Stopwatch();
    
  }
  ngOnInit(): void {
    
    this.streamInfo = this._callService.getStreamSettings();
    console.log('stream info: ',this.streamInfo);
    const {callOptions} =  this.streamInfo;
    if(callOptions.video){
      this.videoOptions = {width: 200, height: 200};
    }
    else{
      this.videoOptions = {width: 0, height: 0};
    }
    this.firebaseUser = this._auth.getUser();
  }
  ngAfterViewInit(): void {
    this._socket.emit('req get my user', undefined);
    this.getMyUserSubscription = this._socket.listen('res get my user').subscribe( myUser=>{
      const {socketId} = myUser;
      this.userCard = new ContactInfo(this.firebaseUser.uid, this.firebaseUser.displayName, this.firebaseUser.email, 'online', this.firebaseUser.photoURL, socketId);
      //this.handleContactSelected();
      this.contact = this.streamInfo.contact;
      if(this.streamInfo.sender){
        this.makeACall();
        this.handleCallAnswer();
      }
      else{
        this.contact = this.streamInfo.contact;
        this.initCall();
      }
    })
  }

  ngOnDestroy(): void {
    this._callService.closeCall(this.contact.uid);
    const videos = document.querySelectorAll('.video-container video');
    videos.forEach( (value:HTMLVideoElement)=>{
      this.stopStreamedVideo(value);
    })
    if(this.getMyUserSubscription) this.getMyUserSubscription.unsubscribe();
    if(this.contactSelectedSubscription) this.contactSelectedSubscription.unsubscribe();
    if(this.listenCallAnswerSubscription) this.listenCallAnswerSubscription.unsubscribe();
    if(this.endCallSignalSubscription) this.endCallSignalSubscription.unsubscribe();
  }

  handleContactSelected() {
    this.contactSelectedSubscription = this._contactSelectedService.contactSelected.subscribe(item => {
      this.contact = item;
    })
  }
  initLocalStream() {

    const { sender, callOptions } = this.streamInfo;
    const videoContainer:HTMLDivElement = this.videoContainer.nativeElement;
 
    navigator.mediaDevices.getUserMedia({ video: callOptions.video, audio: callOptions.audio }).then((stream:MediaStream) => {
      this.stream = stream;

      if(this.streamInfo.callOptions.video){
        this.addVideo(this.stream, videoContainer, {muted:true});
      }
      else{
        this.addAudio(this.stream, videoContainer, {muted:true});
      }
      if (sender) {
        this._callService.sendStream(this.contact.uid, stream);

        this._callService.receiveStream(this.contact.uid).then((remoteStream:MediaStream) => {
          if(this.streamInfo.callOptions.video){
            this.addVideo(remoteStream,videoContainer,{ muted: false });
          }
          else{
            this.addAudio(remoteStream,videoContainer,{ muted: false });
          }
        }).catch(err => console.error(err));
      }
      else {
        this._callService.listenStreamCall(this.contact.uid, stream).then((res) => {
          this._callService.receiveStream(this.contact.uid).then((remoteStream:MediaStream) => {
            if(this.streamInfo.callOptions.video){
              this.addVideo(remoteStream, videoContainer, { muted: false });
            }
            else{
              this.addAudio(remoteStream, videoContainer, { muted: false });
            }
          }).catch(err => console.error(err));

        })


      }
    }).catch(err => {
      console.error(err);
      alert('Media devices not available');
      this._router.navigate(["/chat",1]);
    });
  }
  addAudio(remoteStream: MediaStream, htmlElement: HTMLDivElement, options: { muted: boolean; }) {
    const video = document.createElement('video');
    video.srcObject = remoteStream;
    video.muted = options.muted;
    video.classList.add('video');
    video.width = 200;
    video.height = 200;
    video.style.display = "none";
    video.onloadedmetadata = function (e) {
      video.play();
      htmlElement.appendChild(video);
    }
  }
  addVideo(remoteStream: MediaStream, htmlElement:HTMLElement,options: { muted:boolean}) {
    const video = document.createElement('video');
    video.srcObject = remoteStream;
    video.muted = options.muted;
    video.classList.add('video');
    video.width = 200;
    video.height = 200;
    video.onloadedmetadata = function (e) {
      video.play();
      htmlElement.appendChild(video);
    }
  }
  startTimer() {
    this.stopwatch.start();
  }
  stopTimer() {
    this.stopwatch.stop();
  }
  endCall(sendStatus:boolean = true) {
    const videoStreamTracks = this.stream?.getAudioTracks();
    const audioStreamTracks = this.stream?.getVideoTracks();
    if(videoStreamTracks){
     videoStreamTracks.forEach(function (track) {
          track.stop();
      });
    }
    if(audioStreamTracks){
      this.stream.getVideoTracks().forEach(function (track) { //in case... :)
          track.stop();
      });

    }
    this.stopTimer();
    if(sendStatus){
      this._socket.emit('end call', this.contact.socketId);
    }
    this._router.navigate(["/chat",1]);
  }
  stopStreamedVideo(videoElem:HTMLVideoElement) {
    const stream = <MediaStream> videoElem.srcObject;
    const tracks = stream?.getTracks();
    if(tracks){
      tracks.forEach(function(track) {
        track.stop();
      });
      videoElem.srcObject = null;
    }
  }
  makeACall() {
    const peerId = this._callService.id;
    const senderInfo = this.userCard;
    const receiverId = this.contact.socketId;
    const {callOptions} = this._callService.getStreamSettings();
    this._socket.emit('send call request', {senderInfo, callOptions,receiverId});
  }
  handleCallAnswer(){
    this.listenCallAnswerSubscription = this._socket.listen('listen call answer').subscribe((callAllowed:boolean)=>{
      if (callAllowed) {
        this.initCall();
      }
      else {
        this.handleCallDenegated();
      }
    })
    
  }
  public initCall() {
    this.initLocalStream();
    this.callStarted = true;
    this.startTimer();
    this.endCallSignalSubscription = this._socket.listen('end call signal').subscribe( (socketId:string)=>{
      if(this.contact.socketId === socketId){
        this.endCall(false);
      }
    })
  }
  public handleCallDenegated() {
    $('#callDenegated').modal('show');
  }
  async closeConnection(){
    this._router.navigate(["/chat",1]);
  }
}
