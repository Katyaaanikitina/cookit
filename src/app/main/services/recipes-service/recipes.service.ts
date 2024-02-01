import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscribable, Subscription, map, mergeAll, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private _recipes$ = new BehaviorSubject(undefined);
  private recipes$ = this._recipes$.asObservable();
  private getRecipesSub!: Subscription;

  constructor(private http: HttpClient) { }

  private fetchRecipes() {
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

  loadRecipes() {
    if (this._recipes$.value === undefined) {
      this.getRecipesSub = this.fetchRecipes().subscribe((recipes: any) => this._recipes$.next(recipes))
      return this.recipes$;
    } else {
      return this.recipes$;
    }
  }

  onDestroy() {
    this.getRecipesSub.unsubscribe();
  }
}
