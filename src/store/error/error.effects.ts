import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { appendError, clearError } from './error.actions';
import { debounceTime, exhaustMap, of, switchMap } from 'rxjs';

@Injectable()
export class ErrorEffects {
  removeError$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appendError),
      debounceTime(3000),
      exhaustMap(() => of(clearError()))
    );
  });

  constructor(private actions$: Actions) {}
}
