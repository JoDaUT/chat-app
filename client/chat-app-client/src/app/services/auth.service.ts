import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseConfig = {
    apiKey: "AIzaSyAqNdZSmMQrk3Sw5SZe83e12ipLzgFLl1w",
    authDomain: "chat-app-ac2fe.firebaseapp.com",
    projectId: "chat-app-ac2fe",
    storageBucket: "chat-app-ac2fe.appspot.com",
    messagingSenderId: "380513388976",
    appId: "1:380513388976:web:ee447c53e920915492ae75",
    measurementId: "G-GLPKQJXCWG"
  };
  constructor() { }
}
