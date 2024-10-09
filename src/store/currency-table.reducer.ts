import { createReducer, on } from '@ngrx/store';
import {
  appendCurrencyData,
  appendTableRows,
  hideTableColumn,
  reset,
  showTableColumn,
  sortColumn,
} from './currency-table.actions';
import {
  ApiResponseItem,
  ApiResponseItemKey,
} from '../services/apiResponseItem.type';
import { Column, Row } from '../app/data-table/types/data-table.types';
import { SortingOrder } from '../app/data-table/enums/sortingOrder.enum';

export interface CurrencyTableState {
  data: ApiResponseItem[];
  columns: Column<ApiResponseItemKey>[];
  rows: Row<ApiResponseItemKey>[];
  filteredColumns: ApiResponseItemKey[];
  sortOptions: { id: ApiResponseItemKey | null; order: SortingOrder };
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
  data: [],
  columns: initialColumnList,
  rows: [],
  filteredColumns: [],
  sortOptions: { id: null, order: SortingOrder.default },
};

export const currencyTableReducer = createReducer(
  initialState,
  on(appendCurrencyData, (state, { data }) => ({
    ...state,
    data: [...state.data, ...data],
  })),
  on(appendTableRows, (state, { data }) => ({
    ...state,
    rows: [
      ...state.rows,
      ...data.map((item, i) => ({
        id: i,
        items: state.columns.map((column) => ({
          name: column.id,
          value: item[column.id],
        })),
      })),
    ],
  })),
  on(reset, () => initialState),
  on(showTableColumn, (state, { id }) => ({
    ...state,
    filteredColumns: state.filteredColumns.filter(
      (columnId) => columnId !== id
    ),
    // filter in column from column list
    // set filter active status to true
  })),
  on(hideTableColumn, (state, { id }) => ({
    ...state,
    filteredColumns: [...state.filteredColumns, id],
    // filter out column from column list
    // set filter active status to false
  })),
  on(sortColumn, (state, { id, order }) => {
    return { ...state, sortOptions: { id, order } };
  })
);
