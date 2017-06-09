import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelComponent } from './channel/channel.component';
import { ContextualComponent } from './contextual/contextual.component';
import { NotifComponent } from './notif/notif.component';
import { QueryComponent } from './query/query.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { VideoControlComponent } from './video-control/video-control.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    ContextualComponent,
    NotifComponent,
    QueryComponent,
    ThumbnailComponent,
    VideoControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
