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
    console.log("APP name :",spots.name)
    this.spots =spots.getSpots()
  }

}
