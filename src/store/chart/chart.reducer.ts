import { createReducer, on } from '@ngrx/store';
import { reset, setChartData } from './chart.actions';

export const chartFeatureKey = 'chart';
export interface ChartState {
  labels: string[];
  data: number[];
}

export const initialState: ChartState = {
  labels: [],
  data: [],
};

export const chartReducer = createReducer(
  initialState,
  on(setChartData, (state, { data }) => ({
    labels: data.map((item) => item.name),
    data: data.map((item) => item.market_cap),
  })),
  on(reset, () => initialState)
);
