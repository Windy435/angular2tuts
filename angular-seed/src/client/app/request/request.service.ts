/**
 * Created by phong.tran.nam on 29/11/2016.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Headers, Http} from "@angular/http";
import {Request} from "./request";

@Injectable()
export class RequestService {
    private url = 'http://localhost:3000/api/request';
    private headers = new Headers({'Content-Type':'application/json'});

    constructor(private http: Http) { }
    getRequests(): Promise<Request[]>{
      return this.http.get(this.url)
        .toPromise()
        .then(response=> response.json().data as Request[])
        .catch(this.handleError);
    }

    private handleError(error:any): Promise<any>{
      console.error('An error occurred ', error);
      return Promise.reject((error.message || error));
    }

  create(roomNo: string, guestName: string, requestType: string,
         requestDate: string, requestTime: string, department: string,
         description: string): Promise<Request> {
    return this.http
      .post(this.url, JSON.stringify({
        roomNo: roomNo,
        guestName: guestName,
        requestType: requestType,
        requestTime: new Date(requestDate + " " + requestTime),
        department: department,
        description: description
      }), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Request)
      .catch(this.handleError);
  }
}
