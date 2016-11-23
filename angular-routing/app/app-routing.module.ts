import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisListComponent } from './crisis-list.component';

const appRoutes: Routes = [
    { path: 'crisis-center', component: CrisisListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }