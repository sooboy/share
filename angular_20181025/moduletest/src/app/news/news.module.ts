import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveComponent } from './live/live.component';
import { FocusComponent } from './focus/focus.component';
import { NewsPipe } from './news.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    LiveComponent,
    FocusComponent
  ],
  declarations: [LiveComponent, FocusComponent, NewsPipe]
})
export class NewsModule { }
