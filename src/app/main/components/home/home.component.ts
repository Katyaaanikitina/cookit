import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Recipe } from 'src/interfaces/recipe';
import { SandboxRecipesService } from '../../services/sandbox-recipes-service/sandbox-recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  recipes$!: Observable<Recipe[]>;

  constructor (private readonly _recipesSandboxService: SandboxRecipesService) {}

  ngOnInit() {
    this.recipes$ = this._recipesSandboxService.getRecipes('-NpQF9q_WrvsleQOjnET', 5);
  }
}
