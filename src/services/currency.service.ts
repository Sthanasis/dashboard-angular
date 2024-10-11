import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseItem } from './types/apiResponseItem';
import { INITIAL_TOTAL_COUNT } from '../store/pagination/pagination.reducer';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  totalPerPage: number = INITIAL_TOTAL_COUNT;
  constructor(private http: HttpClient) {}

  getCurrencies() {
    return this.http.get<ApiResponseItem[]>(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${this.totalPerPage}&page=1&sparkline=false`
    );
  }

  getCurrenciesByPage(page: number) {
    return this.http.get<ApiResponseItem[]>(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${this.totalPerPage}&page=${page}&sparkline=false`
    );
  }

  getCurrenciesByTotal(total: number) {
    this.totalPerPage = total;
    return this.http.get<ApiResponseItem[]>(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${this.totalPerPage}&page=1&sparkline=false`
    );
  }
}
