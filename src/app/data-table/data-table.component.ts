import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf, NgComponentOutlet } from '@angular/common';
import { Column, Row } from './data-table.types';
import { SortIconComponent } from '../sort-icon/sort-icon.component';
import { SortingOrder } from './sortingOrder.enum';
import { SortAscIconComponent } from '../sort-asc-icon/sort-asc-icon.component';
import { SortDescIconComponent } from '../sort-desc-icon/sort-desc-icon.component';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [NgFor, NgIf, NgComponentOutlet],
  templateUrl: './data-table.component.html',
})
export class DataTableComponent {
  @Input() columns: Column[] = [];
  @Input() rows: Row[] = [];
  @Output() sortByColumn = new EventEmitter<{
    id: unknown;
    order: SortingOrder;
  }>();

  getNextSortingOrder(order: SortingOrder) {
    return {
      [SortingOrder.default]: SortingOrder.asc,
      [SortingOrder.asc]: SortingOrder.desc,
      [SortingOrder.desc]: SortingOrder.default,
    }[order];
  }

  getSortIcon(order: SortingOrder) {
    return {
      [SortingOrder.default]: SortIconComponent,
      [SortingOrder.asc]: SortAscIconComponent,
      [SortingOrder.desc]: SortDescIconComponent,
    }[order];
  }

  onSortByColumn(id: unknown, order: SortingOrder) {
    this.sortByColumn.emit({ id, order: this.getNextSortingOrder(order) });
  }
}
