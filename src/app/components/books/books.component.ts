import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: any = [];
  selectedBookObj: any[] = [];

  constructor(private sharedS: SharedService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.sharedS.currentBooks.subscribe((books) => {
      this.books = books;
    });
  }

  getDetails(b: any[]) {
    this.selectedBookObj = [];
    this.selectedBookObj.push(b);
  }
}
