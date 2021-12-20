import { Component } from '@angular/core'; 
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private sharedS:SharedService) { }

  resetHome(){
    this.sharedS.updateArrayForRoute('');
  }
}
