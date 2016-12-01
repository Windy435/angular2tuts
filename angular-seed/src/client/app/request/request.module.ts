/**
 * Created by phong.tran.nam on 25/11/2016.
 */
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {RequestHomeComponent} from "./request-home.component";
import {RequestListComponent} from "./request-list.component";
import {RequestAddComponent} from "./request-add.component";

import {RequestRoutingModule} from "./request-routing.model";
import {RequestService} from "./request.service";
import {PagingService} from "../shared/pagination/pagination.service";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [RequestRoutingModule, CommonModule, FormsModule],
    declarations: [RequestHomeComponent, RequestListComponent, RequestAddComponent],
    providers: [RequestService, PagingService]
})
export class RequestModule { }
