import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
  songs: any = [];
  selectedSongObj: any[] = [];

  constructor(private sharedS: SharedService) {}

  ngOnInit(): void {
    this.getSongs();
  }

  getSongs() {
    this.sharedS.currentSongs.subscribe((songs) => {
      this.songs = songs;
    });
  }

  getDetails(s: any[]) {
    this.selectedSongObj=[];
    this.selectedSongObj.push(s); 
  }
}
