import { createReducer, on } from '@ngrx/store';
import { reset, setCurrentPage, setTotalPerPage } from './pagination.actions';
import { TotalCount } from './constants/totalCount';

export const paginationFeatureKey = 'pagination';
export const INITIAL_TOTAL_COUNT = TotalCount.TwentyFive;
export interface PaginationState {
  totalList: number[];
  total: number;
  currentPage: number;
}

export const initialState: PaginationState = {
  totalList: Object.values(TotalCount),
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
