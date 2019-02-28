import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { NewsComponent } from './news/news.component';
import { SiteComponent } from './site/site.component';
import { MsgComponent } from './msg/msg.component';
import { EventComponent } from './event/event.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { CssClassBindingComponent } from './css-class-binding/css-class-binding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    NewsComponent,
    SiteComponent,
    MsgComponent,
    EventComponent,
    StyleBindingComponent,
    CssClassBindingComponent,
    TwowaybindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
