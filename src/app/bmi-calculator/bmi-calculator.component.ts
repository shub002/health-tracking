import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi-calculator',
  imports: [FormsModule,CommonModule],
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css'],
  standalone: true,
})
export class BmiCalculatorComponent implements OnInit {
  weight: number = 0;
  heightCm: number = 0;
  heightFt: number = 0;
  heightInches: number = 0;
  isKg: boolean = true;
  isCm: boolean = true;
  bmiResult: number | null = null;
  bmiCategory: string = '';
  bmiClassification: string = '';
  bmiSuggestions: string = '';

  isBrowser: boolean; // Variable to track if the app is running in the browser

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId); // Check the execution environment
  }

  calculateBmi() {
    let weightInKg = this.isKg ? this.weight : this.weight * 0.453592;
    let heightInMeters: number;

    if (this.isCm) {
      heightInMeters = this.heightCm / 100;
    } else {
      const heightInInches = this.heightFt * 12 + this.heightInches;
      heightInMeters = (heightInInches * 2.54) / 100;
    }

    if (heightInMeters > 0) {
      this.bmiResult = weightInKg / (heightInMeters * heightInMeters);

      if (this.bmiResult < 16) {
        this.bmiCategory = 'severeThinness';
        this.bmiClassification = 'Severe Thinness';
        this.bmiSuggestions = 'Consult a healthcare provider for a personalized plan to gain weight safely.';
      } else if (this.bmiResult >= 16 && this.bmiResult < 17) {
        this.bmiCategory = 'moderateThinness';
        this.bmiClassification = 'Moderate Thinness';
        this.bmiSuggestions = 'Seek professional advice for a weight gain plan.';
      } else if (this.bmiResult >= 17 && this.bmiResult < 18.5) {
        this.bmiCategory = 'mildThinness';
        this.bmiClassification = 'Mild Thinness';
        this.bmiSuggestions = 'Increase caloric intake with a balanced diet and healthy foods.';
      } else if (this.bmiResult >= 18.5 && this.bmiResult < 25) {
        this.bmiCategory = 'normal';
        this.bmiClassification = 'Normal';
        this.bmiSuggestions = 'Maintain a balanced diet and regular exercise.';
      } else if (this.bmiResult >= 25 && this.bmiResult < 30) {
        this.bmiCategory = 'overweight';
        this.bmiClassification = 'Overweight';
        this.bmiSuggestions = 'Consider a balanced diet and increased physical activity.';
      } else if (this.bmiResult >= 30 && this.bmiResult < 35) {
        this.bmiCategory = 'obeseClassI';
        this.bmiClassification = 'Obese Class I';
        this.bmiSuggestions = 'Consult with a healthcare provider for weight loss strategies.';
      } else if (this.bmiResult >= 35 && this.bmiResult < 40) {
        this.bmiCategory = 'obeseClassII';
        this.bmiClassification = 'Obese Class II';
        this.bmiSuggestions = 'Seek medical guidance for a structured weight loss plan.';
      } else {
        this.bmiCategory = 'obeseClassIII';
        this.bmiClassification = 'Obese Class III';
        this.bmiSuggestions = 'Immediate consultation with a healthcare provider is recommended.';
      }

      // Save to localStorage only in the browser
      if (this.isBrowser) {
        const bmiData = {
          bmiResult: this.bmiResult,
          bmiCategory: this.bmiCategory,
          bmiClassification: this.bmiClassification,
          bmiSuggestions: this.bmiSuggestions,
        };
        console.log(bmiData)
        localStorage.setItem('bmiData', JSON.stringify(bmiData));
      }
    }
  }

  toggleWeightUnit() {
    this.isKg = !this.isKg;
    if (!this.isKg) {
      this.weight = this.weight * 2.20462;
    } else {
      this.weight = this.weight / 2.20462;
    }
  }

  toggleHeightUnit() {
    this.isCm = !this.isCm;
    if (!this.isCm) {
      const totalInches = this.heightCm / 2.54;
      this.heightFt = Math.floor(totalInches / 12);
      this.heightInches = Math.round(totalInches % 12);
    } else {
      const totalInches = this.heightFt * 12 + this.heightInches;
      this.heightCm = totalInches * 2.54;
    }
  }

  loadBmiData() {
    if (this.isBrowser) {
      const savedData = localStorage.getItem('bmiData');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        this.bmiResult = parsedData.bmiResult;
        this.bmiCategory = parsedData.bmiCategory;
        this.bmiClassification = parsedData.bmiClassification;
        this.bmiSuggestions = parsedData.bmiSuggestions;
      }
    }
  }

  ngOnInit() {
    // Load BMI data from localStorage if running in the browser
    this.loadBmiData();
  }
}
