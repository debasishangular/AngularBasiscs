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
import { DecoratorComponent } from './decorator/decorator.component';
import { ParentComponent } from './decorator/parent/parent.component';
import { ChildOneComponent } from './decorator/child/child.component';
import { ContentChildComponent } from './content-child/content-child.component';

import { CityComponent } from './content-child/city/city.component';
import { AddressComponent } from './content-child/address/address.component';
import { FriendComponent } from './content-child/friend/friend.component';
import { DirectiveComponent } from './directive/directive.component';
import { UserComponent } from './directive/user/user.component';
import { MycolorDirective } from './directive/mycolor.directive';
import { MouseactionDirective } from './directive/mouseaction.directive';
import { DltIfDirective } from './directive/dlt-if.directive';
import { DltForLoopDirective } from './directive/dlt-for-loop.directive';
import { PipesComponent } from './pipes/pipes.component';
import { DivisionPipe } from './pipes/division.pipe';
import { PurePipe } from './pipes/purepipe.pipe';
import { ImpurePipe } from './pipes/impurepipe.pipe';
import { CustomUppercasePipe } from './pipes/custom-uppercase.pipe';
import { CounterComponent } from './counter/counter.component';



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
    TwowaybindingComponent,
    DecoratorComponent,
    ParentComponent,
    ChildOneComponent,
    ContentChildComponent,
    CityComponent,
    AddressComponent,
    FriendComponent,
    DirectiveComponent,
    UserComponent,
    MycolorDirective,
    MouseactionDirective,
    DltIfDirective,
    DltForLoopDirective,
    PipesComponent,
    DivisionPipe,
    PurePipe,
    ImpurePipe,
    CustomUppercasePipe,
    CounterComponent,



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
