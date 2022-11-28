import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkHeaderComponent } from './talk-header.component';

describe('TalkHeaderComponent', () => {
  let component: TalkHeaderComponent;
  let fixture: ComponentFixture<TalkHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalkHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
