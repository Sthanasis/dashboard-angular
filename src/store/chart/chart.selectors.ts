import { createFeatureSelector } from '@ngrx/store';
import { chartFeatureKey, ChartState } from './chart.reducer';

export const selectChart = createFeatureSelector<ChartState>(chartFeatureKey);
