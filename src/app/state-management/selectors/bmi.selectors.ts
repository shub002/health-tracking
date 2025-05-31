import { createReducer, on } from '@ngrx/store';
import { setBmi } from '../actions/bmi.actions'; // Make sure the path is correct

export interface BmiState {
  bmi: number | null;
}

export const initialState: BmiState = {
  bmi: null,
};

export const bmiReducer = createReducer(
  initialState,
  on(setBmi, (state, { bmi }) => ({ ...state, bmi }))
);
