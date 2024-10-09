import { NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppFilter } from './types/appFilter';

@Component({
  selector: 'app-filters-dropdown',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './filters-dropdown.component.html',
})
export class FiltersDropdownComponent {
  @Input() filters: AppFilter[] = [];
  @Output() filterClickEvent = new EventEmitter<{
    id: unknown;
    isActive: boolean;
  }>();
  @Output() onClose = new EventEmitter();
  isOpen = false;
  toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }
  filterClicked(id: unknown, isActive: boolean) {
    this.filterClickEvent.emit({ id, isActive });
  }
  close() {
    this.toggleIsOpen();
    this.onClose.emit();
  }
}
