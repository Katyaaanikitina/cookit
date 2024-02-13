import { TestBed } from '@angular/core/testing';

import { NeedAuthPopUpService } from './need-auth-pop-up.service';

describe('NeedAuthPopUpService', () => {
  let service: NeedAuthPopUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeedAuthPopUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
