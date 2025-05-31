import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calorie-tracker',
  templateUrl: './calorie-tracker.component.html',
  styleUrls: ['./calorie-tracker.component.css'],
  imports:[CommonModule,MatCardModule,MatProgressBarModule,MatIconModule,MatProgressSpinnerModule,MatListModule,MatFormFieldModule,MatInputModule,FormsModule]
})
export class CalorieTrackerComponent implements OnInit {
  ngOnInit(): void {
   
  }
  dailyGoal = 2500; // Goal calories
  caloriesConsumed = 0;
  caloriesBurned = 500; // Example burned calories
  mealCalories: number = 0;
  history: { date: string; calories: number }[] = [];

  addCalories() {
    // Logic to add calories consumed
    if (this.mealCalories > 0) {
      this.caloriesConsumed += this.mealCalories;
      this.history.push({
        date: new Date().toLocaleDateString(),
        calories: this.mealCalories,
      });
      this.mealCalories = 0;
    }
  }

  logMeal() {
    // Function to log the meal and calories consumed
    if (this.mealCalories > 0) {
      this.addCalories();
    }
  }
}