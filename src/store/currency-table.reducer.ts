import { createReducer, on } from '@ngrx/store';
import {
  appendCurrencyData,
  appendTableRows,
  hideTableColumn,
  reset,
  showTableColumn,
} from './currency-table.actions';
import {
  ApiResponseItem,
  ApiResponseItemKey,
} from '../services/apiResponseItem.type';
import { Column, Row } from '../app/data-table/data-table.types';

export interface AppState {
  data: ApiResponseItem[];
  columns: Column<ApiResponseItemKey>[];
  rows: Row<ApiResponseItemKey>[];
  filteredColumns: ApiResponseItemKey[];
}

const initialColumnList: Column<ApiResponseItemKey>[] = [
  { id: 'id', value: 'Id' },
  { id: 'name', value: 'Name' },
  { id: 'symbol', value: 'Symbol' },
  { id: 'current_price', value: 'Current Price' },
  { id: 'market_cap', value: 'Market Cap' },
  { id: 'total_volume', value: 'Total Volume' },
  { id: 'high_24h', value: 'High 24h' },
  { id: 'low_24h', value: 'Low 24h' },
  {
    id: 'price_change_percentage_24h',

    value: 'Price Change percentage 24h',
  },
  {
    id: 'circulating_supply',

    value: 'Circulating Supply',
  },
];

export const initialState: AppState = {
  data: [],
  columns: initialColumnList,
  rows: [],
  filteredColumns: [],
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
  }))
);
