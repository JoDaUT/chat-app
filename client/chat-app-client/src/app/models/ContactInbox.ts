import {ChatMessage} from './ChatMessage'
import ContactInfo from './ContactInfo';

export default class ContactInbox{
    public contactInfo:ContactInfo;
    //public _id:string;
    public messages:Array<ChatMessage>;
}