import { Component, Input } from '@angular/core';

import { Recipe } from 'src/interfaces/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  @Input() recipes!: Recipe[];

  constructor() {}

  ngOnInit() {
  }
}
