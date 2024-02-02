import { Component, Input } from '@angular/core';
import { Recipe } from 'src/interfaces/recipe';

@Component({
  selector: 'app-recipes-section',
  templateUrl: './recipes-section.component.html',
  styleUrls: ['./recipes-section.component.scss']
})
export class RecipesSectionComponent {
  @Input() recipes!: Recipe[];

  ngOnInit() {
  }
}
