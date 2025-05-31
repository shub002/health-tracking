import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebarOpen = true;  // Initially set to false (sidebar closed)
  isSidebarCollapsed = false; // Track the collapsed state of the sidebar

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;  // Toggle the sidebar state
  }

  toggleCollapse(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;  // Toggle the collapsed state
  }
}