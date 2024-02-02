import { Injectable } from '@angular/core';
import { RecipesService } from '../recipes-service/recipes.service';
import { Observable } from 'rxjs';
import { Recipe } from 'src/interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class SandboxRecipesService {

  constructor(private recipesService: RecipesService) { }

  getRecipes(): Observable<Recipe[]> {
    return this.recipesService.loadRecipes();
  }
}
