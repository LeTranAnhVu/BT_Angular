import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


import { MessagesService } from './messages.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class HeroService {
  constructor(private messageService: MessagesService) {
    this.shareMsg = 'thank you for use our hero service';
  }
  shareMsg: string;
  getHeroes(): Observable<Hero[]> {
    // send the fetched message
    this.sendMessage('data is fetched successfully rrrr!');
    return of(HEROES);
  }
  sendMessage(message: string) {
    this.messageService.getMessage(message);
  }
  sendThankLetter() {
    return this.shareMsg;
  }
  getFeedback(fb: string) {
    this.shareMsg = fb;
  }
  getHero(id: number): Observable<Hero> {
    this.sendMessage('hero fetched');
    return of(HEROES.find(hero => {
      return hero.id === id;
    }));
  }
}
