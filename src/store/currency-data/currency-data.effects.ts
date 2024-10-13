import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CurrencyService } from '../../services/currency.service';
import { appendCurrencyData, loadCurrencyData } from './currency-data.actions';
import { exhaustMap, switchMap, of, catchError } from 'rxjs';
import { INITIAL_TOTAL_COUNT } from '../pagination/pagination.reducer';
import { appendError } from '../error/error.actions';

@Injectable()
export class CurrencyDataEffects {
  loadCurrency$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCurrencyData),
      exhaustMap(() =>
        this.currencyService.getCurrencies(INITIAL_TOTAL_COUNT).pipe(
          switchMap((data) => of(appendCurrencyData({ data }))),
          catchError(() =>
            of(appendError({ error: 'Failed to load currency data' }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
  ) {}
}
