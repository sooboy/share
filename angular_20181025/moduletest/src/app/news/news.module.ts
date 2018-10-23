import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveComponent } from './live/live.component';
import { FocusComponent } from './focus/focus.component';
import { NewsPipe } from './news.pipe';
import { SpotComponent } from './spot/spot.component';
import { SpotaComponent } from './spot/spota/spota.component';
import { SpotbComponent } from './spot/spotb/spotb.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    LiveComponent,
    FocusComponent,
    SpotComponent,
    SpotaComponent,
    SpotbComponent
  ],
  declarations: [LiveComponent, FocusComponent, NewsPipe, SpotComponent, SpotaComponent, SpotbComponent]
})
export class NewsModule { }
