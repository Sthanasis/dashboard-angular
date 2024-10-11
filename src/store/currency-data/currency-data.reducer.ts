import { createReducer, on } from '@ngrx/store';
import { ApiResponseItem } from '../../services/types/apiResponseItem';
import { appendCurrencyData } from './currency-data.actions';

type DataState = {
  data: ApiResponseItem[];
};

const initialState: DataState = {
  data: [],
};

export const dataReducer = createReducer(
  initialState,
  on(appendCurrencyData, (state, { data }) => ({
    ...state,
    data,
  }))
);
