import { Component, OnInit } from '@angular/core';
import { HoodpubService } from './hoodpub.service';
import { Observable } from 'rxjs/Observable';
import { BookItem, Channel, BookSearch } from './protocol';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    resp = 'hello';
    title = 'book';
    // books: Observable<BookItem[]>;
    books: BookItem[];
    tiles = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];

    constructor(private hoodpubService: HoodpubService) {
    }


    ngOnInit() {
        console.log('ngOninit');
    }

    search(keyword?: string) {
        this.hoodpubService.search(keyword)
            .subscribe(resp => {
                this.books = resp;
                console.log('this.books', this.books);
            });
    }
}
