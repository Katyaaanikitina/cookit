import { Component, Input } from '@angular/core';
import { RecipesService } from '../../services/recipes-service/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  @Input() recipes!: any;

  constructor() {}

  ngOnInit() {
  }
}
