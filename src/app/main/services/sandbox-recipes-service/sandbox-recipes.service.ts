import { Injectable } from '@angular/core';
import { RecipesService } from '../recipes-service/recipes.service';

@Injectable({
  providedIn: 'root'
})
export class SandboxRecipesService {

  constructor(private recipesService: RecipesService) { }

  getRecipes() {
    return this.recipesService.loadRecipes();
  }
}
