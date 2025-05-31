import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindfulnessToolsComponent } from './mindfulness-tools.component';

describe('MindfulnessToolsComponent', () => {
  let component: MindfulnessToolsComponent;
  let fixture: ComponentFixture<MindfulnessToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindfulnessToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MindfulnessToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
