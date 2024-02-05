import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HomeComponent } from './components/home/home.component';
import { RecipesSectionComponent } from './components/recipes-section/recipes-section.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { SharedModule } from '../shared/shared.module';
import { RecipeCardComponent } from './components/recipes-list/components/recipe-card/recipe-card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainPageComponent,
    HomeComponent,
    RecipesSectionComponent,
    RecipesListComponent,
    RecipeCardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  providers: []
})
export class MainModule { }
