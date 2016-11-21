/**
 * Created by phong.tran.nam on 21/11/2016.
 */
import {Component} from "@angular/core";

@Component({
    selector:'loop-back',
    template:`
        <input #box (keyup)="0"/>
        <p>{{box.value}}</p>
    `
})

export class LoopbackComponent{}