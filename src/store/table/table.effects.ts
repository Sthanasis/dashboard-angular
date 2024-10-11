import { CurrencyService } from '../../services/currency.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, of, switchMap } from 'rxjs';
import { appendTableRows } from './table.actions';
import { appendCurrencyData } from '../currency-data/currency-data.actions';

@Injectable()
export class CurrencyTableEffects {
  initTable$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appendCurrencyData),
      exhaustMap(({ data }) => of(appendTableRows({ data })))
    );
  });

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
  ) {}
}
