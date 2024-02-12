import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './components/logo/logo.component';
import { TitleH2Component } from './components/title-h2/title-h2.component';
import { StarsRateComponent } from './components/stars-rate/stars-rate.component';
import { CookingTimeComponent } from './components/cooking-time/cooking-time.component';
import { ChangeCookingTimeFormatPipe } from './pipes/change-cooking-time-format.pipe';
import { FavoriteMarkComponent } from './components/favorite-mark/favorite-mark.component';


@NgModule({
  declarations: [
    LogoComponent,
    TitleH2Component,
    StarsRateComponent,
    CookingTimeComponent,
    ChangeCookingTimeFormatPipe,
    FavoriteMarkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    TitleH2Component,
    StarsRateComponent,
    CookingTimeComponent,
    FavoriteMarkComponent
  ],
  providers: []
})
export class SharedModule { }
