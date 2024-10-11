import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseItemKey } from '../../../services/types/apiResponseItem';
import {
  selectTable,
  selectFilters,
  selectSearchText,
} from '../../../store/table/table.selectors';
import { selectPagination } from '../../../store/pagination/pagination.selectors';
import { Column, Row } from '../data-table/types/data-table';
import { Store } from '@ngrx/store';
import {
  hideTableColumn,
  showTableColumn,
  sortColumn,
  setSearchText,
} from '../../../store/table/table.actions';
import {
  setCurrentPage,
  setTotalPerPage,
} from '../../../store/pagination/pagination.actions';
import { SortingOrder } from '../data-table/enums/sortingOrder';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataTableComponent } from '../data-table/data-table.component';
import { FiltersDropdownComponent } from '../filters-dropdown/filters-dropdown.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-table-container',
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
  templateUrl: './table-container.component.html',
  styleUrl: './table-container.component.css',
})
export class TableContainerComponent {
  table$: Observable<{
    columns: Column<ApiResponseItemKey>[];
    rows: Row<ApiResponseItemKey>[];
  }> = this.store.select((state) => selectTable(state));
  filters$ = this.store.select((state) => selectFilters(state));
  pagination$ = this.store.select((state) => selectPagination(state));
  searchText$ = this.store.select((state) => selectSearchText(state));
  timeout: ReturnType<typeof setTimeout> | undefined;
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
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.store.dispatch(setSearchText({ text }));
    }, 500);
  }
}
