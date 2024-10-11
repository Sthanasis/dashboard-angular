import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf, NgComponentOutlet } from '@angular/common';
import { Column, Row } from './types/data-table.types';
import { SortIconComponent } from '../../icons/sort-icon/sort-icon.component';
import { SortingOrder } from './enums/sortingOrder.enum';
import { SortAscIconComponent } from '../../icons/sort-asc-icon/sort-asc-icon.component';
import { SortDescIconComponent } from '../../icons/sort-desc-icon/sort-desc-icon.component';

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
