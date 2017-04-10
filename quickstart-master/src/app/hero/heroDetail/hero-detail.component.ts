import {Component,Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';


import { HeroService } from './../hero-service';
import { Hero } from './../hero';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'hero-detail',
	templateUrl: './heroDetail.html',
	providers: [HeroService],
	styleUrls: ['./../../style.css']
})

export class HeroDetailComponent implements OnInit{
	@Input() hero: Hero;
	
	constructor(
	  private heroService: HeroService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}
	
	ngOnInit(): void {
		console.log('In ');
		this.route.params.switchMap((params:Params)=> this.heroService.getHero(+params['id']))
		.subscribe(myHero => this.hero = myHero);
	}
}