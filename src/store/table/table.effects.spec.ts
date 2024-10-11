import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CurrencyTableEffects } from './table.effects';

describe('CurrencyTableEffects', () => {
  let actions$: Observable<any>;
  let effects: CurrencyTableEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyTableEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(CurrencyTableEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
