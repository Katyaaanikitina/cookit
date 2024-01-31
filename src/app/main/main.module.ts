import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent
  ],
  imports: [
    MainRoutingModule
  ],
  providers: []
})
export class MainModule { }
