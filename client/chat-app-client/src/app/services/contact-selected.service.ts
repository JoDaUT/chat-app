import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { ChatMessage } from '../models/ChatMessage';
import ContactInfo from '../models/ContactInfo';
@Injectable({
  providedIn: 'root'
})
export class ContactSelectedService {
  private contactSource:BehaviorSubject<ContactInfo>;
  public currentContact:Observable<ContactInfo>;
  
  // public inbox:Array<ContactInbox>;
  constructor() {
    this.contactSource = new BehaviorSubject<ContactInfo>(new ContactInfo('','','','','assets/icons/default-avatar.svg'));
    this.currentContact = this.contactSource.asObservable(); 
  }
  updateContactSelected(contact:ContactInfo){
    this.contactSource.next(contact);
  }

}
