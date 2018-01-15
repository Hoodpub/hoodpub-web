import { Component, OnInit } from '@angular/core';
import { HoodpubService } from './hoodpub.service';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { BookItem, Channel, BookSearch } from './protocol';
import { debounceTime, filter, map, switchMap, tap, distinctUntilChanged } from 'rxjs/operators';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    books$: Observable<BookItem[]>;
    private searchField: FormControl;

    constructor(private hoodpubService: HoodpubService) {
    }


    ngOnInit() {
        this.searchField = new FormControl();
        this.books$ = this.searchField.valueChanges.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            switchMap(term => this.hoodpubService.search(term)));
    }

// doSearch(keyword?: string) {
// }
}
