import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {AboutModule} from './about/about.module';
import {HomeModule} from './home/home.module';
import {SharedModule} from './shared/shared.module';
import {RequestModule} from "./request/request.module";
import {DiscountModule} from "./discount/discount.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule, AboutModule, HomeModule, RequestModule, DiscountModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule {
}
