/**
 * Created by phong.tran.nam on 25/11/2016.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RequestHomeComponent} from "./request-home.component";
import {RequestAddComponent} from "./request-add.component";

const requestRoutes: Routes = [
  {
    path: 'request',
    component: RequestHomeComponent
  },
  {
    path: 'request/add',
    component: RequestAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(requestRoutes)],
  exports: [RouterModule],
})
export class RequestRoutingModule {
}
