import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RecipesSectionComponent } from './components/recipes-section/recipes-section.component';
import { RecipesListComponent } from './components/recipes-section/recipes-list/recipes-list.component';
import { RecipeCardComponent } from './components/recipes-section/recipes-list/recipe-card/recipe-card.component';
import { MainPageComponent } from './main-page.component';

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
