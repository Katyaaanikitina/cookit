import { TestBed } from '@angular/core/testing';

import { AuthPopUpService } from './auth-pop-up.service';

describe('AuthPopUpService', () => {
  let service: AuthPopUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthPopUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
