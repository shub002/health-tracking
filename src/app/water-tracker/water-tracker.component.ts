import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-water-tracker',
  templateUrl: './water-tracker.component.html',
  styleUrls: ['./water-tracker.component.css'],
  imports:[MatCardModule,CommonModule,MatProgressBarModule,MatIconModule]
})
export class WaterTrackerComponent implements OnInit {
  waterData = {
    consumed: 1.5,
    goal: 3,
    progress: 50,
  };

  constructor() {}

  ngOnInit(): void {
    this.calculateWaterProgress();
  }

  updateWaterIntake(amount: number): void {
    this.waterData.consumed += amount;
    if (this.waterData.consumed > this.waterData.goal) {
      this.waterData.consumed = this.waterData.goal;
    }
    this.calculateWaterProgress();
  }

  calculateWaterProgress(): void {
    this.waterData.progress = (this.waterData.consumed / this.waterData.goal) * 100;
  }

  resetWaterIntake(): void {
    this.waterData.consumed = 0;
    this.calculateWaterProgress();
  }
}