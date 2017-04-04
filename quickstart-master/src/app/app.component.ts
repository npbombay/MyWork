import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero-service';
import { OnInit} from '@angular/core'; 

@Component({
  selector: 'my-app',
  templateUrl: './heroList.html',
  providers: [HeroService]
})
export class AppComponent  implements OnInit {
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