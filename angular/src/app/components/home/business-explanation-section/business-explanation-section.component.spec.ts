import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessExplanationSectionComponent } from './business-explanation-section.component';

describe('BusinessExplanationSectionComponent', () => {
  let component: BusinessExplanationSectionComponent;
  let fixture: ComponentFixture<BusinessExplanationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessExplanationSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessExplanationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
