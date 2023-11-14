import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReCaptchaInAngularComponent } from './re-captcha-in-angular.component';

describe('ReCaptchaInAngularComponent', () => {
  let component: ReCaptchaInAngularComponent;
  let fixture: ComponentFixture<ReCaptchaInAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReCaptchaInAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReCaptchaInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
