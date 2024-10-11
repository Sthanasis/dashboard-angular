import { createReducer, on } from '@ngrx/store';
import {
  appendTableRows,
  hideTableColumn,
  reset,
  setSearchText,
  showTableColumn,
  sortColumn,
} from './table.actions';
import {
  ApiResponseItem,
  ApiResponseItemKey,
} from '../../services/types/apiResponseItem';
import { Column, Row } from '../../app/table/data-table/types/data-table';
import { SortingOrder } from '../../app/table/data-table/enums/sortingOrder';

export const currencyTableFeatureKey = 'currencyTable';

export type SortOptions = {
  id: ApiResponseItemKey | null;
  order: SortingOrder;
};

export interface CurrencyTableState {
  columns: Column<ApiResponseItemKey>[];
  rows: Row<ApiResponseItemKey>[];
  filteredColumns: ApiResponseItemKey[];
  sortOptions: SortOptions;
  searchText: string;
}

const initialColumnList: Column<ApiResponseItemKey>[] = [
  { id: 'id', value: 'Id', sortingOrder: SortingOrder.default },
  { id: 'name', value: 'Name', sortingOrder: SortingOrder.default },
  { id: 'symbol', value: 'Symbol', sortingOrder: SortingOrder.default },
  {
    id: 'current_price',
    value: 'Current Price',
    sortingOrder: SortingOrder.default,
  },
  { id: 'market_cap', value: 'Market Cap', sortingOrder: SortingOrder.default },
  {
    id: 'total_volume',
    value: 'Total Volume',
    sortingOrder: SortingOrder.default,
  },
  { id: 'high_24h', value: 'High 24h', sortingOrder: SortingOrder.default },
  { id: 'low_24h', value: 'Low 24h', sortingOrder: SortingOrder.default },
  {
    id: 'price_change_percentage_24h',
    value: 'Price Change percentage 24h',
    sortingOrder: SortingOrder.default,
  },
  {
    id: 'circulating_supply',
    value: 'Circulating Supply',
    sortingOrder: SortingOrder.default,
  },
];

export const initialState: CurrencyTableState = {
  columns: initialColumnList,
  rows: [],
  filteredColumns: [],
  sortOptions: { id: null, order: SortingOrder.default },
  searchText: '',
};

export const currencyTableReducer = createReducer(
  initialState,
  on(appendTableRows, (state, { data }) => ({
    ...state,
    rows: data.map((item, i) => ({
      id: i,
      items: state.columns.map((column) => ({
        name: column.id,
        value: item[column.id],
      })),
    })),
  })),
  on(showTableColumn, (state, { id }) => ({
    ...state,
    filteredColumns: state.filteredColumns.filter(
      (columnId) => columnId !== id
    ),
  })),
  on(hideTableColumn, (state, { id }) => ({
    ...state,
    filteredColumns: [...state.filteredColumns, id],
  })),
  on(sortColumn, (state, { id, order }) => ({
    ...state,
    sortOptions: { id, order },
  })),
  on(setSearchText, (state, { text }) => ({
    ...state,
    searchText: text,
  })),
  on(reset, () => initialState)
);
