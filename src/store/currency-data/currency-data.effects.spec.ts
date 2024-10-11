import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { CurrencyDataEffects } from './currency-data.effects';

describe('CurrencyDataEffects', () => {
  let actions$: Observable<any>;
  let effects: CurrencyDataEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyDataEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(CurrencyDataEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
