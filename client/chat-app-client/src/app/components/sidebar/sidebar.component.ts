import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import ContactInfo from 'src/app/models/ContactInfo';
import { ConversationsService } from 'src/app/services/conversations-service/conversations.service';
import { map } from 'rxjs/operators';
import ContactInbox from '../../models/ContactInbox';
import { Observable } from 'rxjs';
import { SocketService } from 'src/app/services/socket-service/socket.service';
@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() public contactsInfo: Array<ContactInfo>;
  @Output() public contactSelected = new EventEmitter<ContactInfo>();
  constructor(private _conversationsService: ConversationsService,
    private _socket: SocketService) {
    this.contactsInfo = new Array<ContactInfo>();
  }

  ngOnInit(): void {
    this.loadContacts();
    this.handleContactDisconnection();
    this.handleContactConnection();
  }

  onSubmit(form: NgForm): void {
    console.log('search form send');
  }
  getMyUser(): Observable<any> {
    return this._socket.listen('get my user');
  }
  handleContactDisconnection() {
    this._socket.listen('user disconnect').subscribe((user: any) => {
      console.log('user disconnect: ', user.socketId);
      const index = this.contactsInfo.findIndex((value: ContactInfo) => value.socketId === user.socketId)
      console.log(index);
      this.deleteContactFormList(index);
    })
  }
  deleteContactFormList(index) {
    if (index > -1) {
      this.contactsInfo.splice(index, 1);
    }
  }
  handleContactConnection() {
    this._socket.listen('user connect').subscribe((user: any) => {
      const socketId = user.socketId;
      const contact = user.data;
      console.log('user conect: ', user.socketId);
      this.contactsInfo.push(new ContactInfo(contact.uid, contact.displayName, contact.email, 'online', contact.photoURL, socketId));
    })
  }
  loadContacts() {
    this._conversationsService.getContacts().subscribe((contacts: any[]) => {
      for (let item of contacts) {
        const socketId = item.socketId;
        const contact = item.data;
        const contactInfo: ContactInfo = new ContactInfo(contact.uid, contact.displayName, contact.email, 'online', contact.photoURL, socketId);
        this.contactsInfo.push(contactInfo);
      }
      console.log('from service: ', this.contactsInfo.map((value: ContactInfo) => value.socketId));
    },
      err => console.log('load contacts error: ', err))
  }
  notifyContactSelected(contact: ContactInfo) {
    this.contactSelected.emit(contact);
  }

}
