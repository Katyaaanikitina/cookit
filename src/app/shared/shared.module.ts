import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './components/logo/logo.component';
import { TitleH2Component } from './components/titles/title-h2/title-h2.component';
import { StarsRateComponent } from './components/stars-rate/stars-rate.component';
import { CookingTimeComponent } from './components/cooking-time/cooking-time.component';
import { ChangeCookingTimeFormatPipe } from './pipes/change-cooking-time-format.pipe';
import { FavoriteMarkComponent } from './components/favorite-mark/favorite-mark.component';
import { NeedAuthPopUpComponent } from './components/need-auth-pop-up/need-auth-pop-up.component';
import { TitleH3Component } from './components/titles/title-h3/title-h3.component';

@NgModule({
  declarations: [
    LogoComponent,
    TitleH2Component,
    StarsRateComponent,
    CookingTimeComponent,
    ChangeCookingTimeFormatPipe,
    FavoriteMarkComponent,
    NeedAuthPopUpComponent,
    TitleH3Component,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    TitleH2Component,
    StarsRateComponent,
    CookingTimeComponent,
    FavoriteMarkComponent,
    NeedAuthPopUpComponent,
    TitleH3Component
  ],
  providers: []
})
export class SharedModule { }
