
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { map } from 'rxjs/operators';
import { SharedService } from './shared.service';
@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private _httpClient: HttpClient, private sharedS:SharedService) { }

  public getBooks(){
    return this._httpClient
       .get('./assets/books.json').pipe(
        map(res =>{  
          this.sharedS.updateBookList(res)
          return res;
        } ))
 }
 
 public getSongs(){
  return this._httpClient.get('./assets/music.json').pipe(
    map(res =>{  
      this.sharedS.updateSongList(res)
      return res;
    } ))
}
}
