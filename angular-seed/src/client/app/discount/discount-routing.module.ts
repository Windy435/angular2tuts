/**
 * Created by phong.tran.nam on 28/11/2016.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscountHomeComponent } from './discount-home.component';

const routes: Routes = [
  { path: 'discount', component: DiscountHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscountRoutingModule { }
