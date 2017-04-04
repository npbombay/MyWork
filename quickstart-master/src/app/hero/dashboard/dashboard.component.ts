import {Component} from '@angular/core'
import { OnInit} from '@angular/core';

import {Heroes} from './hero/hero'
import { HeroService } from './../hero-service';
 

@Component({
	selector : 'dash-board',
	templateUrl : './dashboard.html',
	providers: [HeroService],
	styleUrls: ['./../../style.css']
})

export class DashBoardComponent implements OnInit{

	heroes: Hero[];
	
	constructor(private heroService:HeroService){}
	
	ngOnInit(): void {
	this.heroService.getHeroes()
			.then((heroes)=> this.heroes = heroes.slice(1,5));
	}
}