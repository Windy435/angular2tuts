/**
 * Created by phong.tran.nam on 21/11/2016.
 */
import {Component} from "@angular/core";
import {Hero} from "../../models/hero";

@Component({
    moduleId: module.id,
    selector: 'hero-form',
    templateUrl:'hero-form.component.html'
})

export class HeroFormComponent{
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    sumitted = false;
    active = true;

    onSubmit(){
        this.sumitted = true;
    }

    newHero(){
        this.model = new Hero(42, '', '', '');
        this.active = false;
    }
}
