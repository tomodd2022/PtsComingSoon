import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingBindingComponent } from './understanding-binding.component';

describe('UnderstandingBindingComponent', () => {
  let component: UnderstandingBindingComponent;
  let fixture: ComponentFixture<UnderstandingBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnderstandingBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
