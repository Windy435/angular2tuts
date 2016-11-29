/**
 * Created by phong.tran.nam on 29/11/2016.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'request-home',
    templateUrl: 'request-home.component.html',
    styleUrls:['request-home.component.css']
})
export class RequestHomeComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

    addRequest(){
      this.router.navigate(['/request/add'])
    }
}
