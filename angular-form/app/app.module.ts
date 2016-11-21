/**
 * Created by phong.tran.nam on 21/11/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {AppComponent} from "./components/AppComponent";
import {HeroFormComponent} from "./components/hero-form/hero-form.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [AppComponent, HeroFormComponent],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
