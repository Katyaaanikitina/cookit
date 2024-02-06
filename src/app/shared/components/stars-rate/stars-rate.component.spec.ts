import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsRateComponent } from './stars-rate.component';

describe('StarsRateComponent', () => {
  let component: StarsRateComponent;
  let fixture: ComponentFixture<StarsRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarsRateComponent]
    });
    fixture = TestBed.createComponent(StarsRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
