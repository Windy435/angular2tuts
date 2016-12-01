/**
 * Created by phong.tran.nam on 01/12/2016.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class PagingService {

  private range(start: number, end: number, step: number = 1): number[] {
    if (typeof start === "undefined") {
      end = start;
      start = 0;
    }

    if (typeof step === "undefined") {
      step = 1;
    }

    if ((step > 0 && start >= end) || (end < 0 && start <= end)) {
      return [];
    }

    let result: number[] = [];

    for (let i = start; step > 0 ? i < end : i > end; i += step) {
      result.push(i);
    }

    return result;
  }

  getPager(totalItems: number, currentPage: number = 1,
           pageSize: number = 10) {
    let totalPages = Math.ceil(totalItems / pageSize);
    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    let pages = this.range(startPage, endPage + 1);
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    }
  }
}
