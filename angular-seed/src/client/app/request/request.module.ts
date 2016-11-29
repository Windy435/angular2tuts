/**
 * Created by phong.tran.nam on 25/11/2016.
 */
import { NgModule } from '@angular/core';

import {RequestHomeComponent} from "./request-home.component";
import {RequestListComponent} from "./request-list.component";
import {RequestAddComponent} from "./request-add.component";

import {RequestRoutingModule} from "./request-routing.model";

@NgModule({
    imports: [RequestRoutingModule],
    declarations: [RequestHomeComponent, RequestListComponent, RequestAddComponent],
    providers: []
})
export class RequestModule { }
