import { TestBed } from '@angular/core/testing';

import { SandboxRecipesService } from './sandbox-recipes.service';

describe('SandboxRecipesService', () => {
  let service: SandboxRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SandboxRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
