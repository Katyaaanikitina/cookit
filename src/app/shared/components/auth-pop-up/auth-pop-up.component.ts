import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthPopUpService } from './auth-pop-up-service/auth-pop-up.service';

@Component({
  selector: 'app-auth-pop-up',
  templateUrl: './auth-pop-up.component.html',
  styleUrls: ['./auth-pop-up.component.scss']
})
export class AuthPopUpComponent {
  popUpText!: string | '';
  private _popUpInfoSub!: Subscription;

  constructor(private readonly _authPopUpService: AuthPopUpService) {}

  ngOnInit() {
    this._popUpInfoSub = this._authPopUpService.popUpInfo$.subscribe(info => {this.popUpText = info});
  }

  ngOnDestroy() {
    this._popUpInfoSub.unsubscribe();
  }

  closePopUp() {
    this._authPopUpService.closeAuthPopUp();
  }
}
