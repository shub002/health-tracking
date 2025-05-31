import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BmiState } from '../state-management/reducers/bmi.reducer';
import { setBmi } from '../state-management/actions/bmi.actions';

@Injectable({
  providedIn: 'root'
})
export class BmiService {
  constructor(private store: Store<BmiState>) {}

  // Sync BMI with localStorage
  syncBmiWithLocalStorage() {
    const bmi = localStorage.getItem('bmi');
    if (bmi) {
      this.store.dispatch(setBmi({ bmi: parseFloat(bmi) }));
    }
  }

  // Store BMI in localStorage whenever it's updated in the store
  setBmiInLocalStorage(bmi: number) {
    localStorage.setItem('bmi', bmi.toString());
  }
}
