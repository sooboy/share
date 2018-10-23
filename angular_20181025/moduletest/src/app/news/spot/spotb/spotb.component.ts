import { Component, OnInit,Input } from '@angular/core';

import {Spoter} from '../../../../helper/interface';
@Component({
  selector: 'app-spotb',
  templateUrl: './spotb.component.html',
  styleUrls: ['./spotb.component.scss']
})
export class SpotbComponent implements OnInit {

  @Input() spot:Spoter;
  constructor() { }

  ngOnInit() {
  }

}
