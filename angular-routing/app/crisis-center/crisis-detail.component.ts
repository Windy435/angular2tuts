import {
    Component, Input, OnInit,
    trigger, transition, animate,
    style, state, HostBinding, Host
} from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';
import "rxjs/add/operator/switchMap";

import {Crisis} from './crisis'
import {CrisisService} from "./crisis.service";

@Component({
    selector: "my-crisis-detail",
    template: `
        <h2>CRISES</h2>
        <div *ngIf="crisis">
            <h3>"{{crisis.name}}"</h3>
            <div>
                <label>id: </label>{{crisis.id}}
            </div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="crisis.name" placeholder="name"/>
            </div>
        </div>
        <p>
            <button (click)="gotocrises()">Back</button>
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

export class CrisisDetailComponent implements OnInit {
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
            .switchMap((params: Params) => this.service.getCrisis(+params['id']))
            .subscribe((crisis: Crisis) => this.crisis = crisis);
    }

    @Input()
    crisis: Crisis;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: CrisisService) {
    }

    gotocrises() {
        let crisisId = this.crisis ? this.crisis.id : null;
        this.router.navigate(['../', {id: crisisId}], {relativeTo: this.route});
    }
}