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
  public parsedTitle: string;
  public parsedSubtitle: string;
  constructor() { }

  ngOnInit(): void {
    this.parsedTitle = this.parseStringByLength(this.title, 28);
    this.parsedSubtitle = this.parseStringByLength(this.subtitle, 23);
  }
  ngDoCheck() {
    this.parsedTitle = this.parseStringByLength(this.title, 28);
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
      if (stringToBeParsed.length < lengthOfParsedString) {
        result = stringToBeParsed;
      }
      else {
        result = stringToBeParsed.substr(0, lengthOfParsedString).concat('...');
      }
    }
    return result;
  }
  print() {
  }
}
