import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Recipe } from 'src/interfaces/recipe';
import { RecipesService } from '../recipes-service/recipes.service';

@Injectable({
  providedIn: 'root'
})
export class SandboxRecipesService {

  constructor(private recipesService: RecipesService) { }

  getRecipes(): Observable<Recipe[]> {
    return this.recipesService.fetchRecipes();
  }
}
