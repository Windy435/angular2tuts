import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

let heroesPromise = Promise.resolve(HEROES);

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return heroesPromise;
    }

    getHero(id: number | string){
        return heroesPromise
            .then(heroes => heroes.find(hero=>hero.id === +id));
    }
}