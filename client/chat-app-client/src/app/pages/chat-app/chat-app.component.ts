import { Component, OnInit } from '@angular/core';
import ContactInfo from 'src/app/models/ContactInfo';
import { ContactSelectedService } from 'src/app/services/contact-selected-service/contact-selected.service';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit {

  public title = 'Sistema de mensajería';

  constructor(){}
  ngOnInit(){}
}
