import { Component } from '@angular/core';
import {SpoterList} from '../helper/interface';

import { SpotsService } from './spots.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moduletest';

  spots:SpoterList[] 

  constructor(spots:SpotsService){
    this.spots =spots.getSpots()
  }

}
