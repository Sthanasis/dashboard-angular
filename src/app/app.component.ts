import { SortingOrder } from './data-table/enums/sortingOrder.enum';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { ApiResponseItemKey } from '../services/types/apiResponseItem.type';
import { FiltersDropdownComponent } from './filters-dropdown/filters-dropdown.component';
import { Store } from '@ngrx/store';
import { selectFilters, selectTable } from '../store/currency-table.selectors';
import {
  hideTableColumn,
  loadCurrencyData,
  showTableColumn,
  sortColumn,
} from '../store/currency-table.actions';
import { Observable } from 'rxjs';
import { Column, Row } from './data-table/types/data-table.types';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { CurrencyTableState } from '../store/currency-table.reducer';
import { PaginationComponent } from './pagination/pagination.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DataTableComponent,
    FiltersDropdownComponent,
    AsyncPipe,
    NgIf,
    JsonPipe,
    PaginationComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  table$: Observable<{
    columns: Column<ApiResponseItemKey>[];
    rows: Row<ApiResponseItemKey>[];
  }> = this.store.select((state) => selectTable(state));
  filters$ = this.store.select((state) => selectFilters(state));

  constructor(
    private store: Store<{ currencyTableReducer: CurrencyTableState }>
  ) {}

  filterColumn(id: unknown, isActive: boolean) {
    if (isActive)
      this.store.dispatch(hideTableColumn({ id: id as ApiResponseItemKey }));
    else this.store.dispatch(showTableColumn({ id: id as ApiResponseItemKey }));
  }

  sortByColumn(id: unknown, order: SortingOrder) {
    this.store.dispatch(sortColumn({ id: id as ApiResponseItemKey, order }));
  }

  ngOnInit() {
    this.store.dispatch(loadCurrencyData());
  }
}
