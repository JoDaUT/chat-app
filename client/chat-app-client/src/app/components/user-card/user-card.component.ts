import { Component, OnInit, Input, Output, AfterViewChecked, DoCheck } from '@angular/core';
import ContactInfo from 'src/app/models/ContactInfo';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit, DoCheck {
  @Input() public avatar: string;
  @Input() public title: string;
  @Input() public subtitle: string;
  @Input() public status: string;
  //@Input() public contact:ContactInfo;
  // @Output() public clicked = new;
  public parsedTitle: string;
  public parsedSubtitle: string;
  constructor() { }

  ngOnInit(): void {
    //console.log('contact: ',this.contact);
    this.parsedTitle = this.parseStringByLength(this.title, 20);
    this.parsedSubtitle = this.parseStringByLength(this.subtitle, 23);
  }
  ngDoCheck() {
    //console.log(this.contact)
    // if(this.title){
    this.parsedTitle = this.parseStringByLength(this.title, 20);
    // }
    // if(this.subtitle){
      if(this.title){
        this.parsedSubtitle = 'online'
      }

    
  }
  /**
   * 
   * @param stringToBeParsed 
   * @param lengthOfParsedString 
   * @returns if string if less than 17 characters returns the same. If not returns substring+'...'
   */
  public parseStringByLength(stringToBeParsed: string, lengthOfParsedString: number): string {
    let result = null;
    if (stringToBeParsed) {
      if (stringToBeParsed.length < 20) {
        result = stringToBeParsed;
      }
      else {
        result = stringToBeParsed.substr(0, lengthOfParsedString).concat('...');
      }
    }
    return result;
  }
  print() {
    //console.log(this.title, this.subtitle, this.status, this.avatar)
  }
}
