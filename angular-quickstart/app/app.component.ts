/**
 * Created by phong.tran.nam on 21/11/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My favorite hero is: {{myHero}}</h2>
        <p>Heroes:</p>
        <ul>
            <li *ngFor="let hero of heroes">
            {{hero}}
            </li>
        </ul>
        <input #newHero
            (keyup.enter)="addHero({newHero : newHero.value}); newHero.value=''"
            (blur)="addHero({newHero : newHero.value}); newHero.value=''"/>
         <button (click)="addHero({newHero : newHero.value})">Add</button>
        `
})

export class AppComponent{
    title = 'Tour of Heroes';
    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    myHero = this.heroes[0];
    addHero(parameters){
        var newHero = parameters.newHero;
        if(newHero){
            this.heroes.push(newHero);
        }
    }
}
