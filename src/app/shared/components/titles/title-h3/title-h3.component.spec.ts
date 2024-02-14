import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleH3Component } from './title-h3.component';

describe('TitleH3Component', () => {
  let component: TitleH3Component;
  let fixture: ComponentFixture<TitleH3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleH3Component]
    });
    fixture = TestBed.createComponent(TitleH3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
