import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {FormsModule}    from '@angular/forms';

import {CrisisRoutingModule} from './crises-routing.module';

import {CrisisCenterComponent}    from './crisis-center.component';
import {CrisisListComponent} from "./crisis-list.component";
import {CrisisDetailComponent} from "./crisis-detail.component";
import {CrisisCenterHomeComponent} from "./crisis-center-home.component";

import {CrisisService} from './crisis.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CrisisRoutingModule
    ],
    declarations: [
        CrisisCenterComponent,
        CrisisListComponent,
        CrisisDetailComponent,
        CrisisCenterHomeComponent
    ],
    providers: [
        CrisisService
    ]
})
export class CrisisCenterModule {
}