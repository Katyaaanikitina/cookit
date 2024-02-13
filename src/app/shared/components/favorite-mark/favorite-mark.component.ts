import { Component } from '@angular/core';
import { NeedAuthPopUpService } from '../need-auth-pop-up/need-auth-pop-up-service/need-auth-pop-up.service';

@Component({
  selector: 'app-favorite-mark',
  templateUrl: './favorite-mark.component.html',
  styleUrls: ['./favorite-mark.component.scss']
})
export class FavoriteMarkComponent {
  //change after login system is implemented
  readonly isFavorite = false;

  constructor(private readonly _authPopUpService: NeedAuthPopUpService) {}

  addToFavorite(): void {
    this._authPopUpService.showAuthPopUp('To add the recipe to your cookbook you need to have an account');
  }
}
