import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenstrualTrackerComponent } from './menstrual-tracker.component';

describe('MenstrualTrackerComponent', () => {
  let component: MenstrualTrackerComponent;
  let fixture: ComponentFixture<MenstrualTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenstrualTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenstrualTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
