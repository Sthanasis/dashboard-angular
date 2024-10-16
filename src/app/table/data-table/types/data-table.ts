import { SortingOrder } from '../enums/sortingOrder';

export type Row<T = string> = {
  id: number;
  items: {
    name: T;
    value: string | number;
  }[];
};

export type Column<T = string> = {
  id: T;
  value: string;
  sortingOrder: SortingOrder;
};
