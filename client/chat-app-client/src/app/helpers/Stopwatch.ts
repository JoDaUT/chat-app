export class Stopwatch{
    private _interval: number;
    hours: number;
    minutes: number;
    seconds: number;
    private _timer: any;
    constructor(){
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this._interval = 1000;
    }
    stop(){
        this.minutes = 0;
        this.seconds = 0;
        if(this._timer){
            window.clearInterval(this._timer);
        }
    }
    start(){
        this._timer = setInterval( ()=>{
            this.seconds++;
            if(this.seconds === 60){
                this.seconds = 0;
                this.minutes++;
            }
            if(this.minutes === 60){
                this.seconds = 0;
                this.minutes = 0;
                this.hours++;
            }
        }, this._interval);
    }
}