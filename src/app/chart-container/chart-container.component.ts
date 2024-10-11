import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectChart } from '../../store/chart/chart.selectors';
import { ChartComponent } from '../components/chart/chart.component';

@Component({
  selector: 'app-chart-container',
  standalone: true,
  imports: [AsyncPipe, ChartComponent, NgIf],
  templateUrl: './chart-container.component.html',
  styleUrl: './chart-container.component.css',
})
export class ChartContainerComponent {
  chart$ = this.store.select((state) => selectChart(state));
  constructor(private store: Store) {}
}
