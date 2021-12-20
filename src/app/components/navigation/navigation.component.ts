import { Component, OnInit } from '@angular/core'; 
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private sharedS:SharedService) { }

  ngOnInit(): void { } 

  resetHome(){
    this.sharedS.updateArrayForRoute(0);
  }
}
