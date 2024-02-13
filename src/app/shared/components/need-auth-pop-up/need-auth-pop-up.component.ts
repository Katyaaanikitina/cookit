import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NeedAuthPopUpService } from './need-auth-pop-up-service/need-auth-pop-up.service';

@Component({
  selector: 'app-need-auth-pop-up',
  templateUrl: './need-auth-pop-up.component.html',
  styleUrls: ['./need-auth-pop-up.component.scss']
})
export class NeedAuthPopUpComponent {
  popUpText!: string | '';
  private _popUpInfoSub!: Subscription;

  constructor(private readonly _authPopUpService: NeedAuthPopUpService) {}

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
