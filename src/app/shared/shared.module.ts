import { NgModule } from '@angular/core';

import { LogoComponent } from './components/logo/logo.component';
import { TitleH2Component } from './components/title-h2/title-h2.component';


@NgModule({
  declarations: [
    LogoComponent,
    TitleH2Component
  ],
  imports: [],
  exports: [
    LogoComponent,
    TitleH2Component
  ],
  providers: []
})
export class SharedModule { }
