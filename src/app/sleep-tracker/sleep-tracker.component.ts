import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@Component({
  selector: 'app-sleep-tracker',
  templateUrl: './sleep-tracker.component.html',
  styleUrls: ['./sleep-tracker.component.css'],
  imports:[FormsModule,CommonModule,MatProgressBarModule,MatCardModule,ReactiveFormsModule]
})
export class SleepTrackerComponent implements OnInit {
  sleepData = {
    goal: 8,        // Hours of sleep goal
    slept: 6.5,     // Hours of sleep achieved
    progress: 81,   // Progress in percentage
    quality: 75,    // Sleep quality percentage
  };
  qualityControl: FormControl | undefined;
  constructor() {
    this.qualityControl = new FormControl(this.sleepData.quality);
  }

  ngOnInit(): void {
    this.calculateSleepProgress();
  }

  updateSleepData(hours: number): void {
    this.sleepData.slept += hours;
    if (this.sleepData.slept > this.sleepData.goal) {
      this.sleepData.slept = this.sleepData.goal;
    }
    this.calculateSleepProgress();
  }

  calculateSleepProgress(): void {
    this.sleepData.progress = (this.sleepData.slept / this.sleepData.goal) * 100;
  }

  updateSleepQuality(event: Event): void {
    const slider = event.target as HTMLInputElement;
    this.sleepData.quality = +slider.value;  // Convert value to number
  }


  resetSleepData(): void {
    this.sleepData.slept = 0;
    this.sleepData.quality = 0;
    this.calculateSleepProgress();
  }
}