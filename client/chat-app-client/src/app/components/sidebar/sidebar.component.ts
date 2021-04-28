import { Component, Input, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import ContactInfo from 'src/app/models/ContactInfo';
import { ConversationsService } from 'src/app/services/conversations-service/conversations.service';
import { SocketService } from 'src/app/services/socket-service/socket.service';
import { ActivatedRoute } from '@angular/router';
import { MessageNotification } from 'src/app/models/MessageNotification';
import { ContactSelectedService } from '../../services/contact-selected-service/contact-selected.service';


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public badgeList = {};

  @Input() public contactsInfo: Array<ContactInfo>;
  stat: number;
  constructor(private _conversationsService: ConversationsService,
              private _contactSelectedService:ContactSelectedService,
              private _socket: SocketService,
              private activatedRoute: ActivatedRoute) {
    this.contactsInfo = new Array<ContactInfo>();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.stat = Number(params['stat']);
      if(Number.isNaN(this.stat)){
        this.stat = 0;
      }
        this.loadContacts();
    });
    this.handleContactDisconnection();
    this.handleContactConnection();
    this.handleMessageNotification();
  }

  onSubmit(form: NgForm): void {
  }
  handleContactDisconnection() {
    this._socket.listen('user disconnect').subscribe((user: any) => {
      const index = this.contactsInfo.findIndex((value: ContactInfo) => value.socketId === user.socketId)
      this.deleteBadgeFromList(index);
      this.deleteContactFromList(index);

    })
  }
  deleteBadgeFromList(index) {
    if (index > -1) {
      delete this.badgeList[this.contactsInfo[index].socketId]
    }
  }
  deleteContactFromList(index) {
    if (index > -1) {
      this.contactsInfo.splice(index, 1);
    }
  }
  handleContactConnection() {
    this._socket.listen('user connect').subscribe((user: any) => {
      const socketId = user.socketId;
      const contact = user.data;
      this.contactsInfo.push(new ContactInfo(contact.uid, contact.displayName, contact.email, 'online', contact.photoURL, socketId));
      this.badgeList[socketId] = 0;
    })
  }
  loadContacts() {
    this._conversationsService.getContacts(this.stat).subscribe((contacts: any[]) => {
      for (let item of contacts) {
        const socketId = item.socketId;
        const contact = item.data;
        const contactInfo: ContactInfo = new ContactInfo(contact.uid, contact.displayName, contact.email, 'online', contact.photoURL, socketId);
        this.contactsInfo.push(contactInfo);
        this.badgeList[contactInfo.socketId] = 0;
      }
    },
      err => console.error('load contacts error: ', err))
  }
  handleContactSelected(contact:ContactInfo){
    this._contactSelectedService.contactSelected.next(contact);
    this.resetBadge(contact.socketId);
  }
  resetBadge(id:string){
    this.badgeList[id] = 0;
  }
  handleMessageNotification() {
    this._conversationsService.getMessageNotifications().subscribe(
      (messageNotification:MessageNotification)=>{
        const id = messageNotification.id;
        if (this.badgeList) {
          this.badgeList[id]++;
        }
      }, (err) => {
        console.error("Error: handleMessageNotification");
      })
  }
}
