import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './components/main-page/main-page.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: MainPageComponent, children: [
    {path: '', component: HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
