import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import {
  currencyTableReducer,
  currencyTableFeatureKey,
} from '../store/currency-table/currency-table.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { CurrencyTableEffects } from '../store/currency-table/currency-table.effects';
import { provideHttpClient } from '@angular/common/http';
import {
  paginationReducer,
  paginationFeatureKey,
} from '../store/pagination/pagination.reducer';
import { PaginationEffects } from '../store/pagination/pagination.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      [currencyTableFeatureKey]: currencyTableReducer,
      [paginationFeatureKey]: paginationReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(CurrencyTableEffects, PaginationEffects),
    provideHttpClient(),
  ],
};
