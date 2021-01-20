import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() public avatar:string;
  @Input() public title:string;
  @Input() public subtitle:string;
  @Input() public status:string;
  public parsedTitle:string;
  public parsedSubtitle:string;
  constructor() { }

  ngOnInit(): void {
    this.parsedTitle = this.parseStringByLength(this.title, 20);
    this.parsedSubtitle = this.parseStringByLength(this.subtitle, 23);
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
    console.log({title:this.title, subtitle:this.subtitle, avatar:this.avatar, status:this.status});
  }
}
