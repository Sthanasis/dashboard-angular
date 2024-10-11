import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, of, switchMap } from 'rxjs';
import { CurrencyService } from '../../services/currency.service';
import {
  appendCurrencyData,
  appendTableRows,
} from '../currency-table/currency-table.actions';
import { setCurrentPage, setTotalPerPage } from './pagination.actions';

@Injectable()
export class PaginationEffects {
  pageChange$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setCurrentPage),
      exhaustMap(({ page }) =>
        this.currencyService.getCurrenciesByPage(page).pipe(
          switchMap((data) =>
            of(appendCurrencyData({ data }), appendTableRows({ data }))
          ),
          catchError(() => EMPTY)
        )
      )
    );
  });

  totalPerPageChange$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setTotalPerPage),
      exhaustMap(({ total }) =>
        this.currencyService.getCurrenciesByTotal(total).pipe(
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
