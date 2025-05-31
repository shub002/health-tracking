import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinCalculatorComponent } from './protein-calculator.component';

describe('ProteinCalculatorComponent', () => {
  let component: ProteinCalculatorComponent;
  let fixture: ComponentFixture<ProteinCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProteinCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProteinCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
