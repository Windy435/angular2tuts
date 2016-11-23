import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

import {Crisis} from './crisis';
import {CrisisService} from './crisis.service';

@Component({
    selector: 'my-crises',
    template: `
        <h2>CRISIS CENTER</h2>
        <ul class="crises">
            <li *ngFor="let crisis of crises | async" [class.selected]="isSelected(crisis)" (click) = "onSelect(crisis)">
                <span class="badge">{{crisis.id}}</span> {{crisis.name}}
            </li>
        </ul>
        <router-outlet></router-outlet>
        `,
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .crises {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 25em;
        }
        .crises li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .crises li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .crises li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .crises .text {
            position: relative;
            top: -3px;
        }
        .crises .badge {
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

export class CrisisListComponent implements OnInit {
    ngOnInit(): void {
        this.crises = this.route.params
            .switchMap((params: Params)=>{
                this.selectedId = +params['id'];
                return this.service.getCrises();
            });
    }

    crises: Observable<Crisis[]>;
    private selectedId: number;

    constructor(private router: Router,
                private service: CrisisService,
                private route: ActivatedRoute) {
    }

    onSelect(crisis: Crisis): void {
        this.selectedId = crisis.id;

        this.router.navigate([crisis.id], {relativeTo: this.route});
    }

    isSelected(crisis: Crisis){
        return crisis.id === this.selectedId;
    }
}
