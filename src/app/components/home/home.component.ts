import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourcesService } from 'src/app/services/resources.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  songs: any[] = [];
  books: any[] = [];

  filtered: any[] = [];

  searchSongCriteria: any;
  searchBookCriteria: any;

  constructor(
    private sharedS: SharedService,
    private router: Router,
    private rs: ResourcesService
  ) {}

  filterBooks(event: any) {
    let input = event.target.value;
    if (event.keyCode === 13) {
      this.filtered = this.books.filter((b) => b['title'].includes(input));
      event.target.value = '';
    }
  }

  filterSongs(event: any) {
    let input = event.target.value;
    if (event.keyCode === 13) {
      this.filtered = this.songs.filter((s) => s['song'].includes(input));
      event.target.value = '';
    }
  }

  filterAll(event: any) {
    let input = event.target.value;
    if (event.keyCode === 13) {
      let filteredBooks = this.books.filter((b) => b['title'].includes(input));
      let filteredSongs = this.songs.filter((s) => s['song'].includes(input));
      this.filtered = filteredBooks.concat(filteredSongs);
      event.target.value = '';
    }
  }

  retrieveSongs() {
    this.rs.getSongs().subscribe((songs: any) => {
      this.songs = songs;
    });
  }
  retrieveBooks() {
    this.rs.getBooks().subscribe((books: any) => {
      this.books = books;
    });
  }

  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }

  ngOnInit(): void {
    this.sharedS.currentArrayForRoute.subscribe(() => {
        this.filtered = [];
    });

    this.retrieveSongs();
    this.retrieveBooks();
  }
}
