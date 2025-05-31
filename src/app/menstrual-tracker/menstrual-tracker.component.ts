import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menstrual-tracker',
  templateUrl: './menstrual-tracker.component.html',
  styleUrls: ['./menstrual-tracker.component.css'],
  imports:[CommonModule,FormsModule]
})
export class MenstrualTrackerComponent {
  startDate: string | null = null;
  cycleLength: number | null = null;
  periodLength: number | null = null;

  nextCycleDate: Date | null = null;
  fertileWindow: string | null = null;
  ovulationDate: Date | null = null;
  reminderSet: boolean = false;

  logCycle() {
    if (this.startDate && this.cycleLength && this.periodLength) {
      const start = new Date(this.startDate);
      this.nextCycleDate = new Date(start);
      this.nextCycleDate.setDate(start.getDate() + this.cycleLength);

      const ovulationDay = new Date(start);
      ovulationDay.setDate(start.getDate() + this.cycleLength - 14);
      this.ovulationDate = ovulationDay;

      const fertileStart = new Date(ovulationDay);
      fertileStart.setDate(fertileStart.getDate() - 5);

      const fertileEnd = new Date(ovulationDay);
      fertileEnd.setDate(fertileEnd.getDate() + 1);

      this.fertileWindow = `${fertileStart.toDateString()} - ${fertileEnd.toDateString()}`;
      this.reminderSet = false;
    }
  }

  setReminder() {
    this.reminderSet = true;
    alert('Period reminder set successfully!');
  }
}
