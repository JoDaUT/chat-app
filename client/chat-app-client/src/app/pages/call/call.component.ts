import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PeerService } from '../../services/peer-service/peer.service';
import ContactInfo from '../../models/ContactInfo';
import { Stopwatch } from 'src/app/helpers/Stopwatch';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit, AfterViewInit,OnDestroy {
  @ViewChild('contactVideo') contactVideo: ElementRef;
  streamInfo: { id: string; contact: ContactInfo, sender: boolean };
  contact: ContactInfo;
  public stopwatch: Stopwatch;
  constructor(private _peer: PeerService, private _router:Router) {
    this.stopwatch = new Stopwatch();
  }
  ngOnDestroy(): void {
    this._peer.closeCall(this.contact._id);
    this.stopStreamedVideo(this.contactVideo)
  }
  ngAfterViewInit(): void {
    this.initLocalStream();
  }

  ngOnInit(): void {
    this.streamInfo = this._peer.getStreamSettings();
    if (this.streamInfo) {
      console.log(this.streamInfo)
      this.contact = this.streamInfo.contact;
    }
    this.startTimer();
  }
  initLocalStream() {

    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      const { sender } = this.streamInfo;
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
  endCall() {
    this.stopTimer();
    
    this._router.navigate(["/chat", "1"]);
  }
  stopStreamedVideo(video:ElementRef) {
    const videoElem = video.nativeElement;
    const stream = videoElem.srcObject;
    const tracks = stream.getTracks();
  
    tracks.forEach(function(track) {
      track.stop();
    });
    videoElem.srcObject = null;
  }

}
