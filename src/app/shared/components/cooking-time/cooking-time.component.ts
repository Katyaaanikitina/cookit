import { Component, Input } from '@angular/core';
import { CookingTime } from 'src/interfaces/recipe';

@Component({
  selector: 'app-cooking-time',
  templateUrl: './cooking-time.component.html',
  styleUrls: ['./cooking-time.component.scss']
})
export class CookingTimeComponent {
  @Input() cookingTime!: CookingTime;
}
