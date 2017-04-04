import { Hero }  from './hero';
import { HEROES }  from './mock-hero';
import { Injectable }  from '@angular/core';

@Injectable()
export class HeroService{

	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}
	
	getHeroesSlowley(): Promise<Hero[]> {
	
		return new Promise(resolve => {
			setTimeout(() => resolve(this.getHeroes()),2000);
		}
	);
	}
}