import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { ChatMessage } from '../../models/ChatMessage';
import ContactInfo from '../../models/ContactInfo';
@Injectable({
  providedIn: 'root'
})
export class ContactSelectedService {
  // private contactSource:BehaviorSubject<ContactInfo>;
  // public currentContact:Observable<ContactInfo>;
  
  public contactSelected:Subject<ContactInfo>;
  // public inbox:Array<ContactInbox>;
  constructor() {
    // this.contactSource = new BehaviorSubject<ContactInfo>(new ContactInfo('','','','','assets/icons/default-avatar.svg',''));
    // this.currentContact = this.contactSource.asObservable(); 

    this.contactSelected = new Subject<ContactInfo>();

    // this.contactSelected.subscribe({
    //   next: (contact:ContactInfo)=>{console.log('observer 1: ',contact)},
    //   error: err=>console.error(err),
    //   complete: ()=>console.log('comlete')
    // });

    // this.contactSelected.subscribe({
    //   next: (contact:ContactInfo)=>{console.log('observer 2: ',contact)},
    //   error: err=>console.error(err),
    //   complete: ()=>console.log('complete')
    // });

    // this.contactSelected.subscribe({
    //   next: (contact:ContactInfo)=>{console.log('observer 3: ',contact)},
    //   error: err=>console.error(err),
    //   complete: ()=>console.log('comlete')
    // });
    // this.contactSelected.next(new ContactInfo('1324','juanito perez','online', 'online', undefined, undefined));

    // setTimeout( ()=>{
    //   this.contactSelected.next(new ContactInfo('1324','isabel victor soto','online', 'online', undefined, undefined));
    //   this.contactSelected.complete();
    // }, 2000);
  }
  // updateContactSelected(contact:ContactInfo){
  //   this.contactSource.next(contact);
  //   // console.log('next: ',contact);
  // }
}
