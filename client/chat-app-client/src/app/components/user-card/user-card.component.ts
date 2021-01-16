import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() public avatar:string;
  @Input() public title:string;
  @Input() public subtitle:string;
  @Input() public status:string;
  constructor() { }

  ngOnInit(): void {
  }

}
