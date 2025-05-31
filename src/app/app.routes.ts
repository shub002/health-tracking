import { DashboardComponent } from './dashboard/dashboard.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { ProteinCalculatorComponent } from './protein-calculator/protein-calculator.component';
import { WaterTrackerComponent } from './water-tracker/water-tracker.component';
import { SleepTrackerComponent } from './sleep-tracker/sleep-tracker.component';
import { CalorieTrackerComponent } from './calorie-tracker/calorie-tracker.component';
import { LoginComponent } from './login/login.component';
// import { AuthGuard } from './services/auth.guard';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { WorkoutGeneratorComponent } from './workout-generator/workout-generator.component';
import { Routes } from '@angular/router';
import { MindfulnessToolsComponent } from './mindfulness-tools/mindfulness-tools.component';
import { MoodTrackerComponent } from './mood-tracker/mood-tracker.component';
import { MenstrualTrackerComponent } from './menstrual-tracker/menstrual-tracker.component';
import { MealPlansComponent } from './meal-plans/meal-plans.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login first
  { path: 'login', component: LoginComponent }, // Login page route
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard], // Protect the dashboard route
  },
  { path: 'bmi-calculator', component: BmiCalculatorComponent, 
    // canActivate: [AuthGuard]
   },
  { path: 'protein-calculator', component: ProteinCalculatorComponent,
    //  canActivate: [AuthGuard] 
    },
  { path: 'water-tracker', component: WaterTrackerComponent, 
    // canActivate: [AuthGuard] 
  },
  { path: 'sleep-tracker', component: SleepTrackerComponent,
    //  canActivate: [AuthGuard] 
    },
  { path: 'calorie-tracker', component: CalorieTrackerComponent, 
    // canActivate: [AuthGuard] 
  },
  { path: 'mood-tracker', component: MoodTrackerComponent, 
    // canActivate: [AuthGuard] 
  },
  { path: 'menstrual-tracker', component: MenstrualTrackerComponent, 
    // canActivate: [AuthGuard] 
  },
  { path: 'workout-generator', component: WorkoutGeneratorComponent, 
    // canActivate: [AuthGuard] 
  },
  { path: 'meal-planner', component: MealPlansComponent,
    //  canActivate: [AuthGuard] 
    },
  { path: 'mindfulness-tool', component: MindfulnessToolsComponent, 
    // canActivate: [AuthGuard] 
  },
  { path: 'register', component: UserRegistrationComponent }
];
