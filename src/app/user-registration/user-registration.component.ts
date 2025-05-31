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
  selector: 'app-user-registration',
  imports:[CommonModule,MatCardModule,MatProgressBarModule,MatIconModule,MatProgressSpinnerModule,MatListModule,MatFormFieldModule,MatInputModule,FormsModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css',
  
})
export class UserRegistrationComponent {
  fullName: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = "Passwords don't match!";
      return;
    }

    // Create user object
    const newUser = {
      fullName: this.fullName,
      email: this.email,
      username: this.username,
      password: this.password
    };

    // Check if user already exists in localStorage (optional)
    let storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if the username already exists
    if (storedUsers.some((user: { username: string }) => user.username === this.username)) {
      this.errorMessage = 'Username already exists!';
      return;
    }

    // Add new user to the array
    storedUsers.push(newUser);

    // Save the updated users array to localStorage
    localStorage.setItem('users', JSON.stringify(storedUsers));

    // After successful registration, redirect to login page
    console.log('User registered successfully', newUser);
    this.router.navigate(['/login']);
  }
}