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
} from '../store/table/table.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { CurrencyTableEffects } from '../store/table/table.effects';
import { provideHttpClient } from '@angular/common/http';
import {
  paginationReducer,
  paginationFeatureKey,
} from '../store/pagination/pagination.reducer';
import { PaginationEffects } from '../store/pagination/pagination.effects';
import { chartFeatureKey, chartReducer } from '../store/chart/chart.reducer';
import { ChartEffects } from '../store/chart/chart.effects';
import { CurrencyDataEffects } from '../store/currency-data/currency-data.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      [currencyTableFeatureKey]: currencyTableReducer,
      [paginationFeatureKey]: paginationReducer,
      [chartFeatureKey]: chartReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(
      CurrencyTableEffects,
      PaginationEffects,
      ChartEffects,
      CurrencyDataEffects
    ),
    provideHttpClient(),
  ],
};
