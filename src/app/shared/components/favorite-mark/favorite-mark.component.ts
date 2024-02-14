import { Component } from '@angular/core';
import { AuthPopUpService } from '../auth-pop-up/auth-pop-up-service/auth-pop-up.service';

@Component({
  selector: 'app-favorite-mark',
  templateUrl: './favorite-mark.component.html',
  styleUrls: ['./favorite-mark.component.scss']
})
export class FavoriteMarkComponent {
  //change after login system is implemented
  readonly isFavorite = false;

  constructor(private readonly _authPopUpService: AuthPopUpService) {}

  addToFavorite(): void {
    this._authPopUpService.showAuthPopUp('To add the recipe to your cookbook you need to have an account');
  }
}
