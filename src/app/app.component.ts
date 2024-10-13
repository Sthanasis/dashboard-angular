import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { NavigationBarComponent } from './common/navigation-bar/navigation-bar.component';
import { loadCurrencyData } from '../store/currency-data/currency-data.actions';
import { selectErrorList } from '../store/error/error.selectors';
import { AsyncPipe, NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent, NgFor, AsyncPipe],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}
  errorList$ = this.store.select((state) => selectErrorList(state));
  ngOnInit() {
    this.store.dispatch(loadCurrencyData());
  }
}
