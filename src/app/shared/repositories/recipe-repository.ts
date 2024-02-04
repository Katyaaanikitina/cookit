import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RecipesRepository {
  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get(`${environment.API_BASE_URL}recipes.json`);
  }
}
