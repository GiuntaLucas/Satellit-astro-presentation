import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessExplanationComponent } from './business-explanation.component';

describe('BusinessExplanationComponent', () => {
  let component: BusinessExplanationComponent;
  let fixture: ComponentFixture<BusinessExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessExplanationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
