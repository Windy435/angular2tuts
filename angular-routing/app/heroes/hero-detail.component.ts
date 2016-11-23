///<reference path="../../node_modules/rxjs/add/operator/switchMap.d.ts"/>
import {
    Component, Input, OnInit,
    trigger, transition, animate,
    style, state, HostBinding, Host
} from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';
import "rxjs/add/operator/switchMap";

import {Hero} from './hero'
import {HeroService} from "./hero.service";

@Component({
    selector: "my-hero-detail",
    template: `
        <h2>HEROES</h2>
        <div *ngIf="hero">
            <h3>"{{hero.name}}"</h3>
            <div>
                <label>id: </label>{{hero.id}}
            </div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
        </div>
        <p>
            <button (click)="gotoHeroes()">Back</button>
        </p>
    `,
    animations: [
        trigger('routeAnimation', [
            state('*',
                style({
                    opacity: 1,
                    transform: 'translateX(0)'
                })
            ),
            transition(':enter', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.2s ease-in')
            ]),
            transition(':leave', [
                animate('0.5s ease-out', style({
                    opacity: 0,
                    transform: 'translateY(100%)'
                }))
            ])
        ])
    ]
})

export class HeroDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    @HostBinding('style.display') get display() {
        return 'block';
    }

    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.service.getHero(+params['id']))
            .subscribe((hero: Hero) => this.hero = hero);
    }

    @Input()
    hero: Hero;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: HeroService) {
    }

    gotoHeroes() {
        let heroId = this.hero ? this.hero.id : null;
        this.router.navigate(['/heroes', {id: heroId}]);
    }
}