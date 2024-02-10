import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { Recipe } from 'src/interfaces/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;
  @ViewChild('title') title!: ElementRef;

  titleHeight!: number;

  ngAfterViewInit() {
    this.titleHeight = this.title.nativeElement.offsetHeight;
  }
}
