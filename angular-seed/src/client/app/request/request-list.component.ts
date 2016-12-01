/**
 * Created by phong.tran.nam on 29/11/2016.
 */
import {Component, OnInit} from '@angular/core';
import {Request} from "./request";
import {RequestService} from "./request.service";
import {PagingService} from "../shared/pagination/pagination.service";

@Component({
  moduleId: module.id,
  selector: 'request-list',
  templateUrl: 'request-list.component.html'
})
export class RequestListComponent implements OnInit {
  constructor(private requestService: RequestService,
              private pagerService: PagingService) {
  }

  private allItems: any[];
  pager: any = {};
  pagedItems: any[];

  getRequests(): void {
    this.requestService.getRequests()
      .then(requests =>{
        this.allItems = requests;
        this.setPage(1);
      });
  }

  setPage(page: number) {
    console.log("click page");

    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.pager = this.pagerService.getPager(this.allItems.length, page);
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  ngOnInit() {
    this.getRequests();
  }
}
