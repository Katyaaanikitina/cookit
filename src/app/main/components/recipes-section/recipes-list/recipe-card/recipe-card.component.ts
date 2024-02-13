import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
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

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.titleHeight = this.title.nativeElement.offsetHeight;
    this._changeDetectorRef.detectChanges();
  }
}
