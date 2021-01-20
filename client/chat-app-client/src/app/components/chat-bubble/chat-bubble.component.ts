import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.css']
})
export class ChatBubbleComponent implements OnInit {
  @Input() public content:string;
  @Input() public date:Date;
  @Input() public type:number;
  @Input() public avatar:string;
  constructor() { }

  ngOnInit(): void {
    
  }

}
