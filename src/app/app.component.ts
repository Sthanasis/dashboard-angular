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
import { setCurrentPage, setTotalPerPage } from '../store/pagination.actions';
import { selectPagination } from '../store/pagination.selectors';
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
  pagination$ = this.store.select((state) => selectPagination(state));

  constructor(private store: Store) {}

  filterColumn(id: unknown, isActive: boolean) {
    if (isActive)
      this.store.dispatch(hideTableColumn({ id: id as ApiResponseItemKey }));
    else this.store.dispatch(showTableColumn({ id: id as ApiResponseItemKey }));
  }

  sortByColumn(id: unknown, order: SortingOrder) {
    this.store.dispatch(sortColumn({ id: id as ApiResponseItemKey, order }));
  }

  loadNextPage(page: number) {
    this.store.dispatch(setCurrentPage({ page: page + 1 }));
  }

  loadPreviousPage(page: number) {
    this.store.dispatch(setCurrentPage({ page: page - 1 }));
  }

  handleTotalChange(total: number) {
    this.store.dispatch(setTotalPerPage({ total }));
  }

  ngOnInit() {
    this.store.dispatch(loadCurrencyData());
  }
}
