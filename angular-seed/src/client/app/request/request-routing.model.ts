/**
 * Created by phong.tran.nam on 25/11/2016.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RequestComponent} from "./request.component";

const requestRoutes: Routes = [
  { path: 'request', component: RequestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(requestRoutes)],
  exports: [RouterModule],
})
export class RequestRoutingModule { }
