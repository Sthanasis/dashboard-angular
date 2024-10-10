import { createAction, props } from '@ngrx/store';

export const setCurrentPage = createAction(
  '[Pagination] SetCurrentPage',
  props<{ page: number }>()
);

export const setTotalPerPage = createAction(
  '[Pagination] setTotalPerPage',
  props<{ total: number }>()
);

export const reset = createAction('[Pagination] Reset');
