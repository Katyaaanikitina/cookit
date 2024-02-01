import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainPageComponent,
    HomeComponent
  ],
  imports: [
    MainRoutingModule,
    SharedModule
  ],
  providers: []
})
export class MainModule { }
