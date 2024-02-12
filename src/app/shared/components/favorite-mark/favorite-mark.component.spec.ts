import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMarkComponent } from './favorite-mark.component';

describe('FavoriteMarkComponent', () => {
  let component: FavoriteMarkComponent;
  let fixture: ComponentFixture<FavoriteMarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteMarkComponent]
    });
    fixture = TestBed.createComponent(FavoriteMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
