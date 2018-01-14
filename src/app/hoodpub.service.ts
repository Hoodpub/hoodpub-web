import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BookItem, Channel, BookSearch } from './protocol';

class Item {
  constructor(public track: string) {
  }
}

@Injectable()
export class HoodpubService {

    constructor(
        private http: HttpClient) { }

    search(keyword?: string): Observable<BookItem[]> {
        console.log('keyword', keyword);
        const params = new HttpParams().set('keyword', keyword);
        const url = ' http://localhost:9000/api/book/';

        return this.http.get<BookSearch>(url, { params }).pipe(
            map((response: BookSearch) => response.res.channel.item),
            tap(info => console.log('info', info))
        );
    }
}
