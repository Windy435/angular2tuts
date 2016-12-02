/**
 * Created by phong.tran.nam on 29/11/2016.
 */
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {RequestService} from "./request.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'request-add',
  templateUrl: 'request-add.component.html',
})
export class RequestAddComponent implements OnInit {
  constructor(private requestService: RequestService,
              private router: Router) {
  }

  ngOnInit() {
  }

  addRequest(roomNo: string,
             guestName: string,
             requestType: string,
             requestDate: string,
             requestTime: string,
             department: string,
             description: string): void {

    if(!roomNo || !guestName || !requestType ||
        !requestDate || !requestTime || !department || !description){return;}

        this.requestService.create(roomNo, guestName, requestType,
                                  requestDate, requestTime, department, description)
          .then((request)=>{
            this.router.navigate(['/request'])
          });
  }
}
