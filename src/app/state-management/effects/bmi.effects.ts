import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { setBmi } from '../actions/bmi.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class BmiEffects {
  constructor(private actions$: Actions, private store: Store) {}

  // Effect to sync BMI data with localStorage
  syncBmiToLocalStorage$ = createEffect(
    () => 
      this.actions$.pipe(
        ofType(setBmi),
        tap(({ bmi }) => {
          localStorage.setItem('bmi', JSON.stringify(bmi));
        })
      ),
    { dispatch: false } // No action dispatched back to the store
  );
}
