import { Component, Input, OnInit } from '@angular/core';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
  @Input() filterValues!: Observable<any>;
  filteredSongs$!: Observable<any>;
  songs: any = [];
  selectedSongObj: any[] = [];
  constructor(private rs: ResourcesService) { }

  ngOnInit(): void {

    if (this.filterValues != undefined) {
      this.filteredSongs$ = 
      combineLatest([this.filterValues, 
        this.rs.getSongs()])
        .pipe(
        map(([filterString, songs]) => {
          return Object.values(songs)
          .filter(song => song.song.toLowerCase()
          .includes(filterString.toLowerCase()))
        })
      )
      this.filteredSongs$.subscribe(res => {
        this.songs = res; 
      })
    }
    else {
      this.getSongs();
    }
  }
  getSongs() {
    this.rs.getSongs().subscribe((songs: any) => {
      this.songs = songs;
    });
  }

  getDetails(s: any[]) {
    this.selectedSongObj = [];
    this.selectedSongObj.push(s);
  }
}
