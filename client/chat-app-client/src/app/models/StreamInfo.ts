import ContactInfo from "./ContactInfo";
export class CallOptions{
    constructor(public audio, public video){}
}
export class StreamInfo{
    // id: string;
    // contact: ContactInfo;
    // sender: boolean;
    // video:boolean

    constructor(public id:string, public contact:ContactInfo, public sender:boolean, public callOptions:CallOptions){}
}