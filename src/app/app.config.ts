import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { currencyTableReducer } from '../store/currency-table.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { CurrencyTableEffects } from '../store/currency-table.effects';
import { provideHttpClient } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ currencyTableReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(CurrencyTableEffects),
    provideHttpClient(),
  ],
};
