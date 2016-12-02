/**
 * Created by phong.tran.nam on 29/11/2016.
 */
import {Component, OnInit} from '@angular/core';
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
      .then(requests => {
        this.allItems = requests.reverse();
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

  private formatDateTime(date: Date): string {
    return this.formatTime(date) + " " + this.formatDate(date);
  }

  private formatDate(date: Date): string {
    let tempDate = new Date(date);
    let month = tempDate.getMonth() + 1;
    let day = tempDate.getDate();
    let year = tempDate.getFullYear();
    let strMonth = month > 10 ? month : '0' + month;
    let strDay = day > 10 ? day : '0' + day;
    let strYear = year > 10 ? year : '0' + year;
    strYear = year > 100 ? year : '0' + year;
    strYear = year > 1000 ? year : '0' + year;

    return strDay + "/" + strMonth + "/" + strYear;
  }

  private formatTime(date: Date): string {
    let tempTime = new Date(date);
    let hours = tempTime.getHours();
    let minutes = tempTime.getMinutes();
    let meridiem = hours >= 12 ? 'P.M' : 'A.M';
    let strMinutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours + ":" + strMinutes + " " + meridiem;
  }
}
