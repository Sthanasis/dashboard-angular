import { Routes } from '@angular/router';
import { TableContainerComponent } from './table-container/table-container.component';
import { ChartContainerComponent } from './chart-container/chart-container.component';

export const routes: Routes = [
  { path: 'table', component: TableContainerComponent },
  { path: 'chart', component: ChartContainerComponent },
];
