import { createReducer, on } from '@ngrx/store';
import { reset, setCurrentPage, setTotalPerPage } from './pagination.actions';

export const paginationFeatureKey = 'pagination';
export const INITIAL_TOTAL_COUNT = 25;
export interface PaginationState {
  totalList: number[];
  total: number;
  currentPage: number;
}

export const initialState: PaginationState = {
  totalList: [10, 25, 50, 100, 250],
  total: INITIAL_TOTAL_COUNT,
  currentPage: 1,
};

export const paginationReducer = createReducer(
  initialState,
  on(setCurrentPage, (state, { page }) => ({
    ...state,
    currentPage: page,
  })),
  on(setTotalPerPage, (state, { total }) => ({
    ...state,
    total,
  })),
  on(reset, () => initialState)
);
