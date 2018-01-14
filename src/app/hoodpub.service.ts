import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BookItem, Channel, BookSearch } from './protocol';

@Injectable()
export class HoodpubService {

    constructor(
        private http: HttpClient) { }

    search(keyword?: string): Observable<BookItem[]> {
        const params = new HttpParams().set('q', keyword);
        const url = ' http://localhost:9000/api/book/';
        console.log('hi');

        return this.http.get<BookSearch>(url).pipe(
            map((res: BookSearch) => res.channel.item),
            tap(info => console.log('info', info))
        );
    }
}
