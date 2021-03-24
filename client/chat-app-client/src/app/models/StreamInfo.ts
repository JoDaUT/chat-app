import ContactInfo from "./ContactInfo";

export class StreamInfo{
    // id: string;
    // contact: ContactInfo;
    // sender: boolean;
    // video:boolean

    constructor(public id:string, public contact:ContactInfo, public sender:boolean, public video:boolean){}
}