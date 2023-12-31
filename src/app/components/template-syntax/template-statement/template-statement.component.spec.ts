import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateStatementComponent } from './template-statement.component';

describe('TemplateStatementComponent', () => {
  let component: TemplateStatementComponent;
  let fixture: ComponentFixture<TemplateStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateStatementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
