import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mindfulness-tools',
  templateUrl: './mindfulness-tools.component.html',
  styleUrls: ['./mindfulness-tools.component.css'],
  imports:[FormsModule,CommonModule]
})
export class MindfulnessToolsComponent {
  meditationDurations = [5, 10, 15, 20]; // Meditation durations in minutes
  meditationDuration = 5; // Default duration
  breathingGuide: string | null = null; // Guide for breathing exercises
  stressReductionTips = [
    'Take deep breaths and count to ten.',
    'Go for a short walk or stretch.',
    'Practice gratitude by listing three things you’re thankful for.',
    'Spend a few minutes doing something you enjoy.',
    'Disconnect from screens and social media for a while.',
  ];

  startMeditation() {
    alert(`Meditation started for ${this.meditationDuration} minutes. Relax and focus.`);
    setTimeout(() => {
      alert('Meditation session complete! Great job!');
    }, this.meditationDuration * 60 * 1000);
  }

  startBreathingExercise() {
    const steps = [
      'Inhale deeply for 4 seconds.',
      'Hold your breath for 7 seconds.',
      'Exhale slowly for 8 seconds.',
    ];
    let index = 0;

    this.breathingGuide = steps[index];
    const interval = setInterval(() => {
      index = (index + 1) % steps.length;
      this.breathingGuide = steps[index];
    }, 4000);

    setTimeout(() => {
      clearInterval(interval);
      this.breathingGuide = null;
      alert('Breathing exercise complete! Feel relaxed.');
    }, 12000); // 3 cycles
  }
}
