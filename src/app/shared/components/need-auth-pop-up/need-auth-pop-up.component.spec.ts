import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedAuthPopUpComponent } from './need-auth-pop-up.component';

describe('NeedAuthPopUpComponent', () => {
  let component: NeedAuthPopUpComponent;
  let fixture: ComponentFixture<NeedAuthPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeedAuthPopUpComponent]
    });
    fixture = TestBed.createComponent(NeedAuthPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
