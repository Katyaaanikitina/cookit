import { Recipe } from 'src/interfaces/recipe';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
 @Input() recipe!: Recipe;
}
