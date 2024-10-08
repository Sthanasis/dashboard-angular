import { Type } from '@angular/core';

export type Row<T = string> = {
  id: number;
  items: {
    name: T;
    value: string | number;
  }[];
};

export type Column<T = string> = {
  name: T;
  value: string;
  action?: (name: string) => void;
  icon: Type<any>;
};
