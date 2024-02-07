import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './components/logo/logo.component';
import { TitleH2Component } from './components/title-h2/title-h2.component';
import { StarsRateComponent } from './components/stars-rate/stars-rate.component';
import { CookingTimeComponent } from './components/cooking-time/cooking-time.component';
import { ChangeCookingTimeFormatPipe } from './pipes/change-cooking-time-format/change-cooking-time-format.pipe';
import { ThreeDotsForLongTextDirective } from './directives/three-dots-for-long-text/three-dots-for-long-text.directive';


@NgModule({
  declarations: [
    LogoComponent,
    TitleH2Component,
    StarsRateComponent,
    CookingTimeComponent,
    ChangeCookingTimeFormatPipe,
    ThreeDotsForLongTextDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    TitleH2Component,
    StarsRateComponent,
    CookingTimeComponent,
    ThreeDotsForLongTextDirective
  ],
  providers: []
})
export class SharedModule { }
