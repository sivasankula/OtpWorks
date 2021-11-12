import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpUiComponent } from './otp-ui.component';

describe('OtpUiComponent', () => {
  let component: OtpUiComponent;
  let fixture: ComponentFixture<OtpUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
