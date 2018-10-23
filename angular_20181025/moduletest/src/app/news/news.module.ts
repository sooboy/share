import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveComponent } from './live/live.component';
import { FocusComponent } from './focus/focus.component';
import { NewsPipe } from './news.pipe';
import { SpotComponent } from './spot/spot.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    LiveComponent,
    FocusComponent,
    SpotComponent
  ],
  declarations: [LiveComponent, FocusComponent, NewsPipe, SpotComponent]
})
export class NewsModule { }
