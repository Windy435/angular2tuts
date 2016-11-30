/**
 * Created by phong.tran.nam on 29/11/2016.
 */
import { Component, OnInit } from '@angular/core';
import {RequestService} from "./request.service";
import {Request} from "./request";

@Component({
    moduleId: module.id,
    selector: 'request-list',
    templateUrl: 'request-list.component.html'
})
export class RequestListComponent implements OnInit {
    constructor(private requestService: RequestService) { }

    requests: Request[];

    getRequests():void{
      this.requestService.getRequests().then(requests => this.requests = requests);
    }

    ngOnInit() {
      this.getRequests();
    }
}
