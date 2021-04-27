import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import ContactInfo from '../../models/ContactInfo';
@Injectable({
  providedIn: 'root'
})
export class ContactSelectedService {

  public contactSelected:Subject<ContactInfo>;
  constructor() {
    this.contactSelected = new Subject<ContactInfo>();
  }
}
