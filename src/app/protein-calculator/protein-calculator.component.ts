import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-protein-calculator',
  imports: [CommonModule,FormsModule],
  templateUrl: './protein-calculator.component.html',
  styleUrl: './protein-calculator.component.css'
})
export class ProteinCalculatorComponent {
  weight: number = 0;
  isMale: boolean = true;
  isKg: boolean = true; // Default weight unit is kg
  activityLevel: number = 1.0; // Default: Sedentary
  proteinRequirement: number | null = null;

  toggleGender() {
    this.isMale = !this.isMale;
  }

  toggleWeightUnit() {
    this.isKg = !this.isKg;
    // Convert weight from lbs to kg or vice versa
    if (!this.isKg && this.weight) {
      this.weight = this.weight * 2.20462; // Convert kg to lbs
    } else if (this.isKg && this.weight) {
      this.weight = this.weight / 2.20462; // Convert lbs to kg
    }
  }

  calculateProtein() {
    if (this.weight && this.activityLevel) {
      // Convert weight to kg if it's in lbs
      const weightInKg = this.isKg ? this.weight : this.weight / 2.20462;

      // Formula for protein requirement
      // 0.8g per kg for sedentary, 1.2-2.0g per kg for active based on activity level
      let proteinPerKg = this.isMale ? 1.2 : 1.0; // Assuming higher protein need for males
      this.proteinRequirement = weightInKg * proteinPerKg * this.activityLevel;
    }
  }
}
