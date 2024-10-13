import { createFeatureSelector, createSelector } from '@ngrx/store';
import { errorFeatureKey, ErrorState } from './error.reducer';

const selectErrorState = createFeatureSelector<ErrorState>(errorFeatureKey);

export const selectErrorList = createSelector(
  selectErrorState,
  (state) => state.errorList
);
