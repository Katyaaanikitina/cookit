import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent
  ],
  imports: [
    MainRoutingModule,
    SharedModule
  ],
  providers: []
})
export class MainModule { }
