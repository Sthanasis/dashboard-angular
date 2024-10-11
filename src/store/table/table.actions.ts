import { createAction, props } from '@ngrx/store';
import {
  ApiResponseItem,
  ApiResponseItemKey,
} from '../../services/types/apiResponseItem';
import { SortingOrder } from '../../app/table/data-table/enums/sortingOrder';

export const hideTableColumn = createAction(
  '[Table Component] HideTableColumn',
  props<{ id: ApiResponseItemKey }>()
);

export const showTableColumn = createAction(
  '[Table Component] ShowTableColumn',
  props<{ id: ApiResponseItemKey }>()
);

export const appendTableRows = createAction(
  '[Table Component] AppendTableRows',
  props<{ data: ApiResponseItem[] }>()
);

export const sortColumn = createAction(
  '[Table Component] SortColumn',
  props<{ id: ApiResponseItemKey; order: SortingOrder }>()
);

export const setSearchText = createAction(
  '[Table Component] SetSearchText',
  props<{ text: string }>()
);

export const reset = createAction('[Table Component] Reset');
