import { Component, OnInit,Input } from '@angular/core';
import {SpoterList,Spoter} from '../../../helper/interface';
@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss']
})
export class SpotComponent implements OnInit {

  @Input() spots:SpoterList[];

  public isPremius(spot:Spoter):boolean{
      return typeof spot.price === "string"
  }
  constructor() { }

  ngOnInit() {
  }

}
