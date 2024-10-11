import { createAction, props } from '@ngrx/store';
import { ApiResponseItem } from '../../services/types/apiResponseItem';

export const loadCurrencyData = createAction(
  '[Currency Data Component] LoadCurrencyData'
);

export const appendCurrencyData = createAction(
  '[Currency Data Component] AppendCurrencyData',
  props<{ data: ApiResponseItem[] }>()
);
