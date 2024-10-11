import { Routes } from '@angular/router';
import { TableContainerComponent } from '../app/table/table-container/table-container.component';
import { ChartContainerComponent } from '../app/chart/chart-container/chart-container.component';

export const routes: Routes = [
  { path: 'table', component: TableContainerComponent },
  { path: 'chart', component: ChartContainerComponent },
  { path: '', redirectTo: '/table', pathMatch: 'full' },
];
