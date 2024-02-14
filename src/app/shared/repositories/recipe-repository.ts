import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RecipesRepository {
  private readonly _recipesURL = `${environment.API_BASE_URL}recipes.json`;

  constructor(private readonly _http: HttpClient) {}

  getRecipes(startKey: string, offset: number): Observable<any> {
    const params = new HttpParams()
                  .set('orderBy', '"$key"')
                  .set('startAt', `"${startKey}"`)
                  .set('limitToFirst', `${offset}`)

    return this._http.get(this._recipesURL, {params: params});
  }
}
