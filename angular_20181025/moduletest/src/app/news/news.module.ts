import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Spots2Service } from '../spots2.service';
import { SpotsService } from '../spots.service';
import { LiveComponent } from './live/live.component';
import { FocusComponent } from './focus/focus.component';
import { NewsPipe } from './news.pipe';
import { SpotComponent } from './spot/spot.component';
import { SpotaComponent } from './spot/spota/spota.component';
import { SpotbComponent } from './spot/spotb/spotb.component';
import { SpotWrapComponent } from './spot-wrap/spot-wrap.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    LiveComponent,
    FocusComponent,
    SpotComponent,
    SpotWrapComponent
  ],
  providers:[
    {provide:SpotsService,useClass:Spots2Service}
  ],
  declarations: [LiveComponent, FocusComponent, NewsPipe, SpotComponent, SpotaComponent, SpotbComponent, SpotWrapComponent]
})
export class NewsModule { }
