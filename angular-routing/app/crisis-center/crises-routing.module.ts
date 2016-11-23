import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';

const heroesRoutes: Routes = [
    { path: 'crisis-center', component: CrisisListComponent },
    { path: 'crisis-center/:id', component: CrisisDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(heroesRoutes)],
    exports: [RouterModule]
})

export class CrisisRoutingModule { }
