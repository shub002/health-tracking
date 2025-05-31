import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[CommonModule,MatCardModule,MatProgressBarModule,MatIconModule,MatProgressSpinnerModule,MatListModule,MatFormFieldModule,MatInputModule,FormsModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin() {
    let storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Find the user with the provided username and check if the password matches
    const user = storedUsers.find((user: { username: string; password: string }) => 
      user.username === this.username && user.password === this.password);

    if (user) {
      // Store the logged-in user in localStorage (optional)
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      // Navigate to the dashboard
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

  onRegisterClick() {
    // Navigate to the register page on Register link click
    this.router.navigate(['/register']);
  }
}