import { Component, OnInit } from '@angular/core';
import { SpotsService } from '../../spots.service';
import { SpoterList } from '../../../helper/interface';
@Component({
  selector: 'app-spot-wrap',
  templateUrl: './spot-wrap.component.html',
  styleUrls: ['./spot-wrap.component.scss']
})
export class SpotWrapComponent implements OnInit {
  spots:SpoterList[];
  constructor( spots:SpotsService) { 
    console.log("SpotWrap Name :",spots.name)
    this.spots = spots.getSpots()
  }

  ngOnInit() {
  }

}
