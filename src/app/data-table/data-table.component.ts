import { Component, Input } from '@angular/core';
import { NgFor, NgIf, NgComponentOutlet } from '@angular/common';
import { Column, Row } from './data-table.types';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [NgFor, NgIf, NgComponentOutlet],
  templateUrl: './data-table.component.html',
})
export class DataTableComponent {
  @Input() columns: Column[] = [];
  @Input() rows: Row[] = [];
}
