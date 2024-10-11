import { SortingOrder } from './data-table/enums/sortingOrder.enum';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { ApiResponseItemKey } from '../services/types/apiResponseItem.type';
import { FiltersDropdownComponent } from './filters-dropdown/filters-dropdown.component';
import { Store } from '@ngrx/store';
import {
  selectFilters,
  selectSearchText,
  selectTable,
} from '../store/currency-table/currency-table.selectors';
import {
  hideTableColumn,
  loadCurrencyData,
  setSearchText,
  showTableColumn,
  sortColumn,
} from '../store/currency-table/currency-table.actions';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  of,
  Subject,
  switchMap,
} from 'rxjs';
import { Column, Row } from './data-table/types/data-table.types';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import {
  setCurrentPage,
  setTotalPerPage,
} from '../store/pagination/pagination.actions';
import { selectPagination } from '../store/pagination/pagination.selectors';
import { SearchComponent } from './search/search.component';
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
    SearchComponent,
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
  searchText$ = this.store.select((state) => selectSearchText(state));

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

  handleSearch(text: string) {
    this.store.dispatch(setSearchText({ text }));
  }

  ngOnInit() {
    this.store.dispatch(loadCurrencyData());
  }
}
