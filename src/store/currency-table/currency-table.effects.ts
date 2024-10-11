import { CurrencyService } from '../../services/currency.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, of, switchMap } from 'rxjs';
import {
  appendCurrencyData,
  appendTableRows,
  loadCurrencyData,
} from './currency-table.actions';

@Injectable()
export class CurrencyTableEffects {
  loadCurrency$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCurrencyData),
      exhaustMap(() =>
        this.currencyService.getCurrencies().pipe(
          switchMap((data) =>
            of(appendCurrencyData({ data }), appendTableRows({ data }))
          ),
          catchError(() => EMPTY)
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
  ) {}
}
