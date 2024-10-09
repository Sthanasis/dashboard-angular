import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseItem } from './types/apiResponseItem.type';

@Injectable({
  providedIn: 'root',
})
export class CurrencyTableService {
  constructor(private http: HttpClient) {}

  getCurrencies() {
    return this.http.get<ApiResponseItem[]>(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=2&sparkline=false '
    );
  }
}
