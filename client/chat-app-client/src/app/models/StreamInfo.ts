import ContactInfo from "./ContactInfo";
export class CallOptions{
    constructor(public audio, public video){}
}
export class StreamInfo{
    constructor(public id:string, public contact:ContactInfo, public sender:boolean, public callOptions:CallOptions){}
}