import { Pipe, PipeTransform } from '@angular/core';
import { Stopwatch } from '../helpers/Stopwatch';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(timer:Stopwatch, h:number, m:number, s:number): string {
    let hours:string;
    let minutes:string;
    let seconds:string;

    if(s < 10){
      seconds = `0${s}`;
    }
    else{
      seconds = `${s}`;
    }

    if(m < 10){
      minutes = `0${m}`;
    }
    else{
      minutes = `${m}`;
    }

    if(h < 10){
      hours = `0${h}`;
    }
    else{
      hours = `${h}`;
    }
    
    if(h === 0 ){
      return `${minutes}:${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
  }

}
