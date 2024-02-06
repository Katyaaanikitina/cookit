import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, map } from 'rxjs';

import { RecipesRepository } from 'src/app/shared/repositories/recipe-repository';
import { Recipe } from 'src/interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private readonly _recipeRepository: RecipesRepository) { }

  fetchRecipes(): Observable<Recipe[]> {
    return this._recipeRepository.getRecipes()
      .pipe(
        map((recipe: {[key: string]: any}) => {
          return Object.keys(recipe).map((key) => ({...recipe[key], id: key}))
        })
      )
  }
}
