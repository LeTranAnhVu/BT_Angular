import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-superman',
  templateUrl: './superman.component.html',
  styleUrls: ['./superman.component.css']
})
export class SupermanComponent implements OnInit {

  constructor(private heroService: HeroService) {
    this.newMsg = this.heroService.sendThankLetter();
    this.heroService.getFeedback('your service is good');
  }
  newMsg: string;
  ngOnInit() {
  }

}
