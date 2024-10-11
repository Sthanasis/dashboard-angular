import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, of } from 'rxjs';
import { setChartData } from './chart.actions';
import { appendCurrencyData } from '../currency-data/currency-data.actions';

@Injectable()
export class ChartEffects {
  loadTopMarketCurrencies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appendCurrencyData),
      exhaustMap(({ data }) =>
        of(
          setChartData({
            data,
          })
        )
      )
    );
  });
  constructor(private actions$: Actions) {}
}
