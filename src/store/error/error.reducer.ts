import { createReducer, on } from '@ngrx/store';
import { appendError, clearError } from './error.actions';

export const errorFeatureKey = 'error';

export type ErrorState = {
  errorList: string[];
};

const initialState: ErrorState = {
  errorList: [],
};

export const errorReducer = createReducer(
  initialState,
  on(appendError, (state, { error }) => ({
    ...state,
    errorList: [...state.errorList, error],
  })),
  on(clearError, (state) => ({
    ...state,
    errorList: [],
  }))
);
