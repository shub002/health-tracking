import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isNavOpen = false;
  constructor(private router: Router) {}
  
  // navigateToBmiCalculator() {
  //   this.router.navigate(['/bmi-calculator']);
  // }
  
  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
  
  logout(): void {
    // Clear any stored user data, like token or authentication info
    localStorage.removeItem('currentUser');  // Example of clearing localStorage
    sessionStorage.removeItem('currentUser'); // Optionally clear sessionStorage

    // Redirect to login page
    this.router.navigate(['/login']);
  }

  
}
