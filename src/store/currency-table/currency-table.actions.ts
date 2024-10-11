import { createAction, props } from '@ngrx/store';
import {
  ApiResponseItem,
  ApiResponseItemKey,
} from '../../services/types/apiResponseItem.type';
import { SortingOrder } from '../../app/data-table/enums/sortingOrder.enum';

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

export const sortColumn = createAction(
  '[Currency Table Component] SortColumn',
  props<{ id: ApiResponseItemKey; order: SortingOrder }>()
);

export const setSearchText = createAction(
  '[Currency Table Component] SetSearchText',
  props<{ text: string }>()
);

export const reset = createAction('[Currency Table Component] Reset');
