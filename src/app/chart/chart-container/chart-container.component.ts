import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartComponent } from '../chart/chart.component';
import { selectChart } from '../../../store/chart/chart.selectors';

@Component({
  selector: 'app-chart-container',
  standalone: true,
  imports: [AsyncPipe, ChartComponent, NgIf],
  templateUrl: './chart-container.component.html',
})
export class ChartContainerComponent {
  chart$ = this.store.select((state) => selectChart(state));
  constructor(private store: Store) {}
}
