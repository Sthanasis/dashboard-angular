import { createFeatureSelector, createSelector } from '@ngrx/store';
import { currencyTableFeatureKey, CurrencyTableState } from './table.reducer';
import { SortingOrder } from '../../app/table/data-table/enums/sortingOrder';
import { compare } from './utilities/compare';

const state = createFeatureSelector<CurrencyTableState>(
  currencyTableFeatureKey
);

const selectColumns = createSelector(state, (state) => {
  return state.columns;
});

const selectFilteredColumns = createSelector(
  state,
  (state) => state.filteredColumns
);

const selectRows = createSelector(state, (state) => state.rows);

const selectSortingOptions = createSelector(
  state,
  (state) => state.sortOptions
);

export const selectSearchText = createSelector(state, (state) => {
  return state.searchText;
});

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

export const selectTableRows = createSelector(
  selectFilteredColumns,
  selectRows,
  selectSortingOptions,
  selectSearchText,
  (filteredColumnIds, rows, sortOptions, searchText) => {
    return rows
      .map((row) => ({
        id: row.id,
        items: row.items.filter(
          (item) => !filteredColumnIds.includes(item.name)
        ),
      }))
      .filter((row) =>
        row.items.some((item) =>
          item.value.toString().toLowerCase().match(searchText.toLowerCase())
        )
      )
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
