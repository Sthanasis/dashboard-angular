import { createAction, props } from '@ngrx/store';
import { ApiResponseItem } from '../../services/types/apiResponseItem';

export const setChartData = createAction(
  '[Chart Component] SetChartData',
  props<{ data: ApiResponseItem[] }>()
);

export const reset = createAction('[Chart Component] Reset');
