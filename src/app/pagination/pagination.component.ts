import { NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NextIconComponent } from '../next-icon/next-icon.component';
import { PreviousIconComponent } from '../previous-icon/previous-icon.component';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NextIconComponent,
    PreviousIconComponent,
    NextIconComponent,
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() total: number[] = [];
  @Input() currentTotal: number | null = null;
  @Input() currentPage: number = 1;
  @Output() totalChange = new EventEmitter<number>();
  @Output() nextPage = new EventEmitter<number>();
  @Output() previousPage = new EventEmitter<number>();

  isDropDownOpen = false;

  setIsDropDownOpen(value: boolean) {
    this.isDropDownOpen = value;
  }

  onTotalChange(total: number) {
    this.totalChange.emit(total);
    this.setIsDropDownOpen(false);
  }

  onNextPage(page: number) {
    this.nextPage.emit(page);
  }

  onPreviousPage(page: number) {
    this.previousPage.emit(page);
  }
}
