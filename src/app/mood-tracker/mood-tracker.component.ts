import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mood-tracker',
  templateUrl: './mood-tracker.component.html',
  styleUrls: ['./mood-tracker.component.css'],
  imports:[CommonModule,FormsModule]
})
export class MoodTrackerComponent {
  moods = [
    { name: 'Happy', icon: '😊' },
    { name: 'Sad', icon: '😢' },
    { name: 'Angry', icon: '😡' },
    { name: 'Calm', icon: '😌' },
    { name: 'Excited', icon: '🤩' },
    { name: 'Tired', icon: '😴' },
  ];

  selectedMood: any = null;
  moodNotes: string = '';
  moodHistory: { mood: any; notes: string; date: string }[] = [];

  selectMood(mood: any) {
    this.selectedMood = mood;
  }

  logMood() {
    if (!this.selectedMood) {
      alert('Please select a mood!');
      return;
    }

    const moodEntry = {
      mood: this.selectedMood,
      notes: this.moodNotes || 'No additional notes',
      date: new Date().toLocaleString(),
    };

    this.moodHistory.push(moodEntry);

    // Clear inputs
    this.selectedMood = null;
    this.moodNotes = '';
  }
}
