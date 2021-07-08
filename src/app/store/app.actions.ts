import { Category, Product } from 'app/store/app.model';
import { createAction, props} from '@ngrx/store';

export namespace UserActions {
  export const clickCatalog = createAction('CLICK_CATALOG');
  export const getCategorySuccess = createAction('GET_CATEGORY_SUCCESS', props<{categorys: Category[]}>());

  export const clickCategory = createAction('CLICK_CATEGORY', props<{categoryId: string}>());
  export const getProductsSuccess = createAction('GET_CATEGORY_SUCCESS', props<{categoryProducts: Product[]}>());

  export const clickProduct = createAction('CLICK_PRODUCT', props<{id: string}>());
  export const getProductSuccess = createAction('GET_PRODUCT_SUCCESS', props<{product: Product}>());

  export const addBasket = createAction('ADD_BASKET', props<{product: Product}>());
}