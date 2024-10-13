import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, of, switchMap, withLatestFrom } from 'rxjs';
import { CurrencyService } from '../../services/currency.service';
import { appendTableRows } from '../table/table.actions';
import { setCurrentPage, setTotalPerPage } from './pagination.actions';
import { appendCurrencyData } from '../currency-data/currency-data.actions';
import { Store } from '@ngrx/store';
import { selectPagination } from './pagination.selectors';
import { appendError } from '../error/error.actions';

@Injectable()
export class PaginationEffects {
  pageChange$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setCurrentPage),
      withLatestFrom(
        this.store.select((state) => selectPagination(state).total)
      ),
      exhaustMap(([{ page }, total]) =>
        this.currencyService
          .getCurrenciesPaginated({ page, totalPerPage: total })
          .pipe(
            switchMap((data) =>
              of(appendCurrencyData({ data }), appendTableRows({ data }))
            ),
            catchError(() =>
              of(appendError({ error: 'Failed to load currency data' }))
            )
          )
      )
    );
  });

  totalPerPageChange$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setTotalPerPage),
      withLatestFrom(
        this.store.select((state) => selectPagination(state).currentPage)
      ),
      exhaustMap(([{ total }, page]) =>
        this.currencyService
          .getCurrenciesPaginated({ page, totalPerPage: total })
          .pipe(
            switchMap((data) =>
              of(appendCurrencyData({ data }), appendTableRows({ data }))
            ),
            catchError(() =>
              of(appendError({ error: 'Failed to load currency data' }))
            )
          )
      )
    );
  });
  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService,
    private store: Store
  ) {}
}
