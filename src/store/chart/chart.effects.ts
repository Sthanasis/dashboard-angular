import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, of } from 'rxjs';
import { appendCurrencyData } from '../currency-table/currency-table.actions';
import { setChartData } from './chart.actions';

@Injectable()
export class ChartEffects {
  loadTopMarketCurrencies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appendCurrencyData),
      exhaustMap(({ data }) =>
        of(
          setChartData({
            labels: data.map((item) => item.name),
            data: data.map((item) => item.market_cap),
          })
        )
      )
    );
  });
  constructor(private actions$: Actions) {}
}
