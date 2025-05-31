import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workout-generator',
  imports: [CommonModule, FormsModule],
  templateUrl: './workout-generator.component.html',
  styleUrl: './workout-generator.component.css'
})
export class WorkoutGeneratorComponent {
  workoutTypes: string[] = ['Strength', 'Cardio', 'HIIT', 'Yoga'];
  selectedWorkoutType: string = 'Strength';
  numSets: number = 3;
  numReps: number = 10;
  workoutRoutine: string[] = [];
  customExercise: string = '';  // Store the custom exercise input

  // Example exercises for each workout type
  workoutExercises: { [key: string]: string[] } = {
    Strength: ['Push-ups', 'Squats', 'Deadlifts', 'Bench Press'],
    Cardio: ['Running', 'Jump Rope', 'Cycling', 'Rowing'],
    HIIT: ['Burpees', 'Mountain Climbers', 'Jumping Jacks', 'High Knees'],
    Yoga: ['Downward Dog', 'Warrior Pose', 'Tree Pose', 'Child’s Pose']
  };

  // Generate the workout routine
  generateWorkout() {
    const selectedExercises = this.workoutExercises[this.selectedWorkoutType];
    this.workoutRoutine = [];

    // Add custom exercise if provided
    if (this.customExercise) {
      this.workoutRoutine.push(`${this.customExercise} - ${this.numReps} reps`);
    }

    // Randomly select exercises based on number of sets if no custom exercise
    for (let i = 0; i < this.numSets; i++) {
      const exercise = selectedExercises[Math.floor(Math.random() * selectedExercises.length)];
      this.workoutRoutine.push(`${exercise} - ${this.numReps} reps`);
    }
  }

  // Download the workout as a text file
  downloadWorkout() {
    const workoutText = this.workoutRoutine.join('\n');
    const blob = new Blob([workoutText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'workout_plan.txt';
    a.click();
    URL.revokeObjectURL(url);
  }
}
