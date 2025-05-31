import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meal-plans',
  templateUrl: './meal-plans.component.html',
  styleUrls: ['./meal-plans.component.css'],
  imports:[CommonModule,FormsModule]
})
export class MealPlansComponent {
  dietaryPreferences: string[] = ['Vegetarian', 'Vegan', 'Keto', 'Low-Carb', 'Balanced'];
  fitnessGoals: string[] = ['Weight Loss', 'Muscle Gain', 'Maintain Weight'];
  selectedDiet: string = '';
  selectedGoal: string = '';
  mealPlan: string[] = [];

  // Sample meal suggestions
  mealsDatabase: { [key: string]: { [key: string]: string[] } } = {
    Vegetarian: {
      'Weight Loss': ['Grilled veggies with quinoa', 'Spinach salad with chickpeas', 'Vegetable soup'],
      'Muscle Gain': ['Lentil curry with brown rice', 'Tofu stir-fry with broccoli', 'Scrambled eggs with avocado toast'],
      'Maintain Weight': ['Pasta primavera', 'Vegetable wrap with hummus', 'Minestrone soup']
    },
    Keto: {
      'Weight Loss': ['Avocado and egg salad', 'Zucchini noodles with pesto', 'Grilled salmon with asparagus'],
      'Muscle Gain': ['Keto chicken casserole', 'Beef stir-fry with cauliflower rice', 'Omelette with cheese and spinach'],
      'Maintain Weight': ['Baked chicken with mixed greens', 'Keto tuna salad', 'Roasted pork with steamed broccoli']
    }
    // Add more combinations for other dietary preferences
  };

  // Generate a personalized meal plan
  generateMealPlan() {
    if (this.selectedDiet && this.selectedGoal) {
      this.mealPlan = this.mealsDatabase[this.selectedDiet][this.selectedGoal];
    }
  }

  // Download the meal plan as a text file
  downloadMealPlan() {
    const mealPlanText = this.mealPlan.join('\n');
    const blob = new Blob([mealPlanText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'meal_plan.txt';
    a.click();
    URL.revokeObjectURL(url);
  }
}
