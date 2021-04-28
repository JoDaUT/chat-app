import {ChatMessage} from './ChatMessage'

export default class ContactInbox{
    public socketId:string;
    public messages:Array<ChatMessage>;
}