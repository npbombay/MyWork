import { Component } from '@angular/core';
import { Hero } from './../hero';
import { HeroService } from './../hero-service';
import { OnInit} from '@angular/core'; 

@Component({
  selector: 'my-heroes',
  templateUrl: './heroList.html',
  providers: [HeroService],
  styleUrls: ['./../../style.css']
})
export class HeroListComponent  implements OnInit {
	title: string = "List of Heroes"
	heroes: Hero[];
	selectedHero: Hero;
	
	constructor(private heroService: HeroService){}
	
	ngOnInit():void {
		this.getHeroes();
	}
	
	onSelect(hero:Hero): void{
		this.selectedHero = hero;
	}
	
	getHeroes(): void {
		this.heroService.getHeroesSlowley().then(myHeroes=> this.heroes = myHeroes);
	}
}