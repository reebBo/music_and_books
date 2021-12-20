import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent   {
@Input() bookDetails: any[]=[];
@Input() songDetails: any[]=[];

  constructor() {} 
}