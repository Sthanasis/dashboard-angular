import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseItem } from './types/apiResponseItem';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getCurrencies(totalPerPage: number) {
    return this.http.get<ApiResponseItem[]>(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${totalPerPage}&page=1&sparkline=false`
    );
  }

  getCurrenciesPaginated({
    page,
    totalPerPage,
  }: {
    page: number;
    totalPerPage: number;
  }) {
    return this.http.get<ApiResponseItem[]>(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${totalPerPage}&page=${page}&sparkline=false`
    );
  }
}
