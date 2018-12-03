import { Injectable } from '@angular/core';
import { Hero  } from './hero';
import { HEROES  } from './mock-heroes';


import { MessagesService } from './messages.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessagesService) { }
  getHeroes(): Observable<Hero[]> {
        // send the fetched message
        this.sendMessage('data is fetched successfully rrrr!');
    return of(HEROES);
  }
  sendMessage(message: string) {
    this.messageService.getMessage(message);
  }
}
