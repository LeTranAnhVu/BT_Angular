import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessagesService) {}
  messages: string[];
  getMessage(): void {
    this.messages = this.messageService.sendMessage();
    console.log('here', this.messages);
  }
  ngOnInit() {
    this.getMessage();
  }

}
