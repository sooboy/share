import { Component, OnInit,Input} from '@angular/core';

import {Spoter} from '../../../../helper/interface';

@Component({
  selector: 'app-spota',
  templateUrl: './spota.component.html',
  styleUrls: ['./spota.component.scss']
})
export class SpotaComponent implements OnInit {
  
  @Input() spot:Spoter;
  constructor() { }

  ngOnInit() {
  }

}
