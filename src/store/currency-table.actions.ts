import { createAction, props } from '@ngrx/store';
import {
  ApiResponseItem,
  ApiResponseItemKey,
} from '../services/apiResponseItem.type';

export const loadCurrencyData = createAction(
  '[Currency Table Component] LoadCurrencyData'
);

export const appendCurrencyData = createAction(
  '[Currency Table Component] AppendCurrencyData',
  props<{ data: ApiResponseItem[] }>()
);

export const hideTableColumn = createAction(
  '[Currency Table Component] HideTableColumn',
  props<{ id: ApiResponseItemKey }>()
);

export const showTableColumn = createAction(
  '[Currency Table Component] ShowTableColumn',
  props<{ id: ApiResponseItemKey }>()
);

export const appendTableRows = createAction(
  '[Currency Table Component] AppendTableRows',
  props<{ data: ApiResponseItem[] }>()
);

export const reset = createAction('[Currency Table Component] Reset');
