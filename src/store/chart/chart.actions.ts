import { createAction, props } from '@ngrx/store';

export const setChartData = createAction(
  '[Chart Component] SetChartData',
  props<{ labels: string[]; data: number[] }>()
);

export const reset = createAction('[Chart Component] Reset');
