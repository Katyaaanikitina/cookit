import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-mark',
  templateUrl: './favorite-mark.component.html',
  styleUrls: ['./favorite-mark.component.scss']
})
export class FavoriteMarkComponent {
  //change after login system is implemented
  readonly isFavorite = false;
}
