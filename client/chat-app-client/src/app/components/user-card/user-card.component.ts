import { Component, OnInit, Input, Output,AfterViewChecked } from '@angular/core';
import ContactInfo from 'src/app/models/ContactInfo';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit, AfterViewChecked {
  // @Input() public avatar:string;
  // @Input() public title:string;
  // @Input() public subtitle:string;
  // @Input() public status:string;

  @Input() public contact:ContactInfo;
  // @Output() public clicked = new;
  public parsedTitle:string;
  public parsedSubtitle:string;
  constructor() { }

  ngOnInit(): void {
    //console.log('contact: ',this.contact);
    this.parsedTitle = this.parseStringByLength(this.contact.title, 20);
    this.parsedSubtitle = this.parseStringByLength(this.contact.subtitle, 23);
  }
  ngAfterViewChecked() {
  }
  /**
   * 
   * @param stringToBeParsed 
   * @param lengthOfParsedString 
   * @returns if string if less than 17 characters returns the same. If not returns substring+'...'
   */
  public parseStringByLength(stringToBeParsed:string, lengthOfParsedString:number):string{
    let result = null;
    if(stringToBeParsed){
      if(stringToBeParsed.length < 20){
        result =  stringToBeParsed;
      }
      else{
        result = stringToBeParsed.substr(0, lengthOfParsedString).concat('...');
      }
    }
    return result;
  }
  public userCardClicked():void{
    //console.log(this.contact);
  }
}
