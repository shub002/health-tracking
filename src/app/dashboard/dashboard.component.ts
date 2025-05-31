import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressSpinnerMode, MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-health-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [MatIconModule, CommonModule, MatGridListModule, MatCardModule, MatProgressBarModule, MatProgressSpinnerModule]
})
export class DashboardComponent implements OnInit {
  // Dashboard Data
  user: any = {}; // Store user data from localStorage
  bmiData: any = {}; // Example BMI data
  proteinData: any = {}; // Example protein intake data
  caloriesData: any = {}; // Example calories data
  waterData: any = {}; // Example water intake data
  sleepData: any = {}; // Example sleep data

  // bmiData = {
  //   value: 22.5,
  //   status: 'Normal',
  //   progress: 70, // For progress circle, calculated based on BMI ranges
  // };

  // proteinData = {
  //   current: 80, // Current protein intake in grams
  //   goal: 100,   // Daily protein intake goal in grams
  //   progress: (80 / 100) * 100, // Progress in percentage
  // };

  // caloriesData = {
  //   burnedToday: 350, // Calories burned today
  //   weeklyGoal: 2000, // Weekly goal for calories burned
  // };

  // waterData = {
  //   consumed: 1.5, // Liters of water consumed today
  //   goal: 3,       // Daily water intake goal in liters
  //   progress: (1.5 / 3) * 100, // Progress in percentage
  // };

  // sleepData = {
  //   hoursSlept: 7, // Hours of sleep tracked today
  //   goal: 8,       // Sleep goal in hours
  //   progress: (7 / 8) * 100, // Progress in percentage
  // };

  constructor() {}

  ngOnInit(): void {
    this.calculateProgress();

    const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.user.fullName = userData.fullName || 'Guest';
    this.user.email = userData.email || 'No email';

    // Example data (replace with actual logic)
    this.bmiData = { value: 24.5, status: 'Normal', progress: 80 };
    this.proteinData = { current: 50, goal: 100, progress: 50 };
    this.caloriesData = { burnedToday: 200, weeklyGoal: 1500 };
    this.waterData = { consumed: 1.5, goal: 3, progress: 50 };
    this.sleepData = { hoursSlept: 6, goal: 8, progress: 75 };
  }

  /**
   * Calculate dynamic progress values for all metrics (if required)
   */
  calculateProgress(): void {
    this.bmiData.progress = this.getBmiProgress(this.bmiData.value);
    this.proteinData.progress = (this.proteinData.current / this.proteinData.goal) * 100;
    this.waterData.progress = (this.waterData.consumed / this.waterData.goal) * 100;
    this.sleepData.progress = (this.sleepData.hoursSlept / this.sleepData.goal) * 100; // Calculate progress for sleep
  }

  /**
   * Get BMI progress based on value
   * @param bmi BMI value
   * @returns Progress percentage
   */
  getBmiProgress(bmi: number): number {
    if (bmi < 18.5) return (bmi / 18.5) * 100; // Underweight range
    if (bmi >= 18.5 && bmi <= 24.9) return 100; // Normal range
    if (bmi >= 25 && bmi <= 29.9) return ((bmi - 25) / (29.9 - 25)) * 100; // Overweight range
    return 100; // Obese or higher
  }
}
