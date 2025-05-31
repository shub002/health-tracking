import { createAction, props } from '@ngrx/store';

export const setBmi = createAction(
  '[BMI Calculator] Set BMI',
  props<{ bmi: number }>()
);
