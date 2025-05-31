import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { bmiReducer } from './state-management/reducers/bmi.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
  provideRouter(routes), 
  provideStore({ bmi: bmiReducer}),
  provideStoreDevtools({ maxAge: 25, logOnly: false }),
  provideClientHydration(withEventReplay()), 
  provideStore()]
};
