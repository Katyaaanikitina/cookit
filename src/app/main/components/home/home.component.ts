import { Component } from '@angular/core';
import { SandboxRecipesService } from '../../services/sandbox-recipes-service/sandbox-recipes.service';
import { Observable } from 'rxjs';
import { Recipe } from 'src/interfaces/recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  recipes$!: Observable<Recipe[]>;

  constructor (public recipesSandboxService: SandboxRecipesService) {}

  ngOnInit() {
    this.recipes$ = this.recipesSandboxService.getRecipes();
  }
}
