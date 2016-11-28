/**
 * Created by phong.tran.nam on 28/11/2016.
 */
import {Component, OnInit} from '@angular/core';
import {DiscountService} from "./discount.service";

@Component({
  moduleId: module.id,
  selector: 'discount-list',
  templateUrl: 'discount-list.component.html'
})
export class DiscountListComponent implements OnInit {
  listDiscount: any[] = [];
  errorMessage: string;

  constructor(private discountService: DiscountService) {
  }

  ngOnInit() {
    this.getAllDiscount();
  }

  getAllDiscount() {
    this.discountService.get()
      .subscribe(
        discounts => this.listDiscount = discounts,
        error => this.errorMessage = <any>error
      );
  }
}
