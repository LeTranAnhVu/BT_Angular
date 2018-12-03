import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: string[] = [];
  getMessage(message) {
    // get the mess from other services
    this.messages.push(message);
  }
  sendMessage() {
    // send the mess to the mess component
    return this.messages;
  }
  constructor() {
  }
}
