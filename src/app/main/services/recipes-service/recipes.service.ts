import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscribable, Subscription, map, mergeAll, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recipe } from 'src/interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  emptyRecipe: Recipe = {
    id: '',
    author: '',
    categories: ['dinner'],
    cookingTime: {hours: 0, minutes: 0},
    date: '',
    description: '',
    ingredients: [{name: '', quantity: ''}],
    isVegan: false,
    picture: '',
    portionsNumber: 0,
    rating: 0,
    steps: [''],
    title: ''
  }
  private _recipes$ : BehaviorSubject<Recipe[]> = new BehaviorSubject([this.emptyRecipe]);
  private recipes$ = this._recipes$.asObservable();
  private getRecipesSub!: Subscription;

  constructor(private http: HttpClient) { }

  private fetchRecipes(): Observable<Recipe[]> {
    return this.http.get(`${environment.API_BASE_URL}recipes.json`)
      .pipe(
        map((recipe: {[key: string]: any}) => {
          return Object.keys(recipe).map((key) => {
            return {
              ...recipe[key],
              id: key
            }
          })
        })
      )
  }

  loadRecipes(): Observable<Recipe[]> {
    if (this._recipes$.value[0].id === '') {
      this.getRecipesSub = this.fetchRecipes().subscribe((recipes: any) => this._recipes$.next(recipes))
      return this.recipes$;
    } else {
      return this.recipes$;
    }
  }

  onDestroy(): void {
    this.getRecipesSub.unsubscribe();
  }
}
