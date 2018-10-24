import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// 内部模块
import { NewsModule } from './news/news.module';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';

// service
import { SpotsService } from './spots.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NewsModule
  ],
  providers: [
    // {provide:SpotsService,useClass:SpotsService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
