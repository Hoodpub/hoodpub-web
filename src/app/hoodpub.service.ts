import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HoodpubService {

    constructor(
        private http: HttpClient) { }

    search() {
        console.log('hi in service');
    }
}
