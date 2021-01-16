import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public userCard:any;
  constructor() {
    this.userCard ={title:'Shiba Inu', subtitle:'Dog Breed', status:'online', avatar:"https://material.angular.io/assets/img/examples/shiba1.jpg"};
    console.log(this.userCard);
  }

  ngOnInit(): void {
  }

}
