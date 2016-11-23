import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    template: `
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes | async" [class.selected]="isSelected(hero)" (click) = "onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        `,
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .heroes li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .heroes li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .heroes .text {
            position: relative;
            top: -3px;
        }
        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
        `]
})

export class HeroListComponent implements OnInit {
    ngOnInit(): void {
        this.heroes = this.route.params
            .switchMap((params: Params)=>{
                this.selectedId = +params['id'];
                return this.service.getHeroes();
            });
    }

    heroes: Observable<Hero[]>;
    private selectedId: number;

    constructor(private router: Router,
                private service: HeroService,
                private route: ActivatedRoute) {
    }

    onSelect(hero: Hero): void {
        this.router.navigate(['/heroes', hero.id]);
    }

    isSelected(hero: Hero){
        return hero.id === this.selectedId;
    }
}
