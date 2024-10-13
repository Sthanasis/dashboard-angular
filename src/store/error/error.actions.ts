import { createAction, props } from '@ngrx/store';

export const appendError = createAction(
  '[Error Component] AppendError',
  props<{ error: string }>()
);

export const clearError = createAction('[Error Component] ClearError');
