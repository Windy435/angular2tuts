/**
 * Created by phong.tran.nam on 25/11/2016.
 */
import { NgModule } from '@angular/core';

import {RequestComponent} from "./request.component";
import {RequestRoutingModule} from "./request-routing.model";

@NgModule({
    imports: [RequestRoutingModule],
    declarations: [RequestComponent],
    providers: [],
})
export class RequestModule { }
