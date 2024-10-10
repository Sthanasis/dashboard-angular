import { createFeatureSelector } from '@ngrx/store';
import { paginationFeatureKey, PaginationState } from './pagination.reducer';

export const selectPagination =
  createFeatureSelector<PaginationState>(paginationFeatureKey);
