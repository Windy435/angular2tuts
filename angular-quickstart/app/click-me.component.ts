/**
 * Created by phong.tran.nam on 21/11/2016.
 */
import {Component} from "@angular/core";

@Component({
    selector: 'click-me',
    template: `
        <button (click)="onclickMe()">Click me!</button>
        {{clickMessage}}
    `
})

export class ClickMeComponent{
    clickMessage = '';

    onclickMe(){
        this.clickMessage = 'You are my Hero!';
    }
}