import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './components/logo/logo.component';
import { TitleH2Component } from './components/title-h2/title-h2.component';
import { StarsRateComponent } from './components/stars-rate/stars-rate.component';
import { CookingTimeComponent } from './components/cooking-time/cooking-time.component';
import { ChangeCookingTimeFormatPipe } from './pipes/change-cooking-time-format/change-cooking-time-format.pipe';

@NgModule({
  declarations: [
    LogoComponent,
    TitleH2Component,
    StarsRateComponent,
    CookingTimeComponent,
    ChangeCookingTimeFormatPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    TitleH2Component,
    StarsRateComponent,
    CookingTimeComponent
  ],
  providers: []
})
export class SharedModule { }
