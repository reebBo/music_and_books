import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
 
 
  private books = new BehaviorSubject('');
  currentBooks = this.books;
  updateBookList(newBooks: any) {
    this.books.next(newBooks);
  }
 
  private songs = new BehaviorSubject('');
  currentSongs = this.songs;
  updateSongList(newSongs: any) {
    this.songs.next(newSongs);
  }

  private arrayForRoute = new BehaviorSubject('');
  currentArrayForRoute = this.arrayForRoute;
  updateArrayForRoute(newArrayForRoute: any) {
    this.arrayForRoute.next(newArrayForRoute);
  }
  
}

 
