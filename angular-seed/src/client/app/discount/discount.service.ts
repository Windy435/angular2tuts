/**
 * Created by phong.tran.nam on 28/11/2016.
 */
import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import {Discount} from "./discount";
import {DISCOUNTS} from "./mock-data";

@Injectable()
export class DiscountService {

    constructor(private http: Http) { }

    get():Observable<Discount[]>{
      return this.http.get('/assets/discount.json')
                      .map((res:Response)=> res.json())
        .catch(this.handleError);
      // return Observable.create(DISCOUNTS)
    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred ', error);
    return Promise.reject(error.message || error);
  }
}
