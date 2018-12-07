import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})



export class HeroDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }
  @Input() hero: Hero;
  id: number = -1;
  getHeroDetail(id: number): void {
    this.heroService.getHero(id).subscribe(hero => { this.hero = hero; });
  }
  goBack() {
    this.location.back();
  }
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id').toString();
    this.getHeroDetail(this.id);
    console.log(this.location);
  }

}
