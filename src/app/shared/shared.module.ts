import { NgModule } from '@angular/core';

import { LogoComponent } from './components/logo/logo.component';
import { TitleH2Component } from './components/title-h2/title-h2.component';
import { StarsRateComponent } from './components/stars-rate/stars-rate.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LogoComponent,
    TitleH2Component,
    StarsRateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    TitleH2Component,
    StarsRateComponent
  ],
  providers: []
})
export class SharedModule { }
