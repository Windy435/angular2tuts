/**
 * Created by phong.tran.nam on 28/11/2016.
 */
import {NgModule} from '@angular/core';
import {DiscountService} from "./discount.service";
import {DiscountHomeComponent} from "./discount-home.component";
import {DiscountListComponent} from "./discount-list.component";
import {DiscountRoutingModule} from "./discount-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule, DiscountRoutingModule],
  declarations: [DiscountHomeComponent, DiscountListComponent],
  exports: [DiscountHomeComponent],
  providers: [DiscountService],
})
export class DiscountModule {
}
