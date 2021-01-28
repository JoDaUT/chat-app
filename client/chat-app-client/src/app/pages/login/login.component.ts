import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginClicked:boolean;
  constructor(private _router:Router) { }

  ngOnInit(): void {
    this.loginClicked = false;
  }
  turnOnSpinner(){
    this.loginClicked = true;
  }
  async googleLogIn(){
    this.turnOnSpinner();
    this._router.navigate(["/chat"]);
    
  }
}
