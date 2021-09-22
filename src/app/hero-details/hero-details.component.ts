import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input()
  hero?: Hero;

  constructor(
    private route: ActivatedRoute
    , private heroService: HeroService
    , private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }

}
