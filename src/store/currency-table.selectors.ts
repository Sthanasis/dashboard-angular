import { createSelector } from '@ngrx/store';
import { CurrencyTableState } from './currency-table.reducer';
import { SortingOrder } from '../app/data-table/enums/sortingOrder.enum';

type AppState = { currencyTableReducer: CurrencyTableState };

const selectColumns = (state: AppState) => {
  return state.currencyTableReducer.columns;
};
const selectFilteredColumns = (state: AppState) =>
  state.currencyTableReducer.filteredColumns;

const selectRows = (state: AppState) => state.currencyTableReducer.rows;

const selectSortingOptions = (state: AppState) =>
  state.currencyTableReducer.sortOptions;

export const selectTableColumns = createSelector(
  selectColumns,
  selectFilteredColumns,
  selectSortingOptions,
  (columns, filteredColumnIds, sortOptions) => {
    return columns
      .map((column) => {
        if (sortOptions.id !== column.id) return column;
        return { ...column, sortingOrder: sortOptions.order };
      })
      .filter((column) => !filteredColumnIds.includes(column.id));
  }
);

const compare = (a: string | number, b: string | number) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
};

export const selectTableRows = createSelector(
  selectFilteredColumns,
  selectRows,
  selectSortingOptions,
  (filteredColumnIds, rows, sortOptions) => {
    return rows
      .map((row) => ({
        id: row.id,
        items: row.items.filter(
          (item) => !filteredColumnIds.includes(item.name)
        ),
      }))
      .sort((a, b) => {
        if (sortOptions.order === SortingOrder.default) return 0;
        const compareA = a.items.find((item) => sortOptions.id === item.name);
        const compareB = b.items.find((item) => sortOptions.id === item.name);
        if (!compareA || !compareB) return 0;
        if (sortOptions.order === SortingOrder.asc)
          return compare(compareA.value, compareB.value);
        else return compare(compareB.value, compareA.value);
      });
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
