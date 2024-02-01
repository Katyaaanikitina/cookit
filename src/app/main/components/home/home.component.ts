import { Component } from '@angular/core';
import { SandboxRecipesService } from '../../services/sandbox-recipes-service/sandbox-recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor (public recipesSandboxService: SandboxRecipesService) {}
}
