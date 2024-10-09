import { createSelector } from '@ngrx/store';
import { AppState } from './currency-table.reducer';

const selectColumns = (state: { currencyTableReducer: AppState }) => {
  return state.currencyTableReducer.columns;
};
const selectFilteredColumns = (state: { currencyTableReducer: AppState }) =>
  state.currencyTableReducer.filteredColumns;
const selectRows = (state: { currencyTableReducer: AppState }) =>
  state.currencyTableReducer.rows;

export const selectTableColumns = createSelector(
  selectColumns,
  selectFilteredColumns,
  (columns, filteredColumnIds) => {
    return columns.filter((column) => !filteredColumnIds.includes(column.id));
  }
);

export const selectTableRows = createSelector(
  selectTableColumns,
  selectRows,
  (columns, rows) => {
    return rows;
  }
);

export const selectTable = createSelector(
  selectTableColumns,
  selectTableRows,
  (columns, rows) => ({ columns, rows })
);

export const selectFilters = createSelector(
  selectColumns,
  selectFilteredColumns,
  (columns, filteredColumnIds) =>
    columns.map((column) => ({
      id: column.id,
      name: column.value,
      isActive: !filteredColumnIds.includes(column.id),
    }))
);
