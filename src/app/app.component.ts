import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { loadCurrencyData } from '../store/currency-table/currency-table.actions';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadCurrencyData());
  }
}
