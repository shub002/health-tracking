import { Component, signal } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { ChatComponent } from "./chat/chat.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, HeaderComponent, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'healthApp';

  bmiInfo = signal({ value: 0, status: '' });

  // Ensure this method matches the expected structure
  updateBmi(bmiData: { value: number; status: string }) {
    this.bmiInfo.set(bmiData);
  }
  isLoginPage(): boolean {
    return this.router.url === '/login' || this.router.url === '/register';
  }
}


