import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipes-section',
  templateUrl: './recipes-section.component.html',
  styleUrls: ['./recipes-section.component.scss']
})
export class RecipesSectionComponent {
  @Input() recipes!: any;

  ngOnInit() {
  }
}
