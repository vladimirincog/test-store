import { Category, Product } from 'app/store/app.model';
import { createAction, props} from '@ngrx/store';

export namespace UserActions {
  export const clickCatalog = createAction('CLICK_CATALOG');
  export const getCategorySuccess = createAction('GET_CATEGORY_SUCCESS', props<{categorys: Category[]}>());

  export const clickCategory = createAction('CLICK_CATEGORY', props<{categoryId: string}>());
  export const getProductsSuccess = createAction('GET_CATEGORY_SUCCESS', props<{categoryProducts: Product[]}>());
}