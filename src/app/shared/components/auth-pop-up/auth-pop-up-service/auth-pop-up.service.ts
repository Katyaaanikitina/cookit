import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthPopUpService {
  private readonly _popUpInfo$ = new Subject<string>();
  public readonly popUpInfo$ = this._popUpInfo$.asObservable();

  showAuthPopUp(popUpInfo: string): void {
    this._popUpInfo$.next(popUpInfo);
  }

  closeAuthPopUp(): void {
    this._popUpInfo$.next('');
  }
}
