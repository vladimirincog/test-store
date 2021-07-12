import { Category, Product } from 'app/store/app.model';
import { createAction, props} from '@ngrx/store';

export namespace GlobalActions{
  export const getCategorySuccess = createAction('GET_CATEGORY_SUCCESS', props<{categories: Category[]}>());
  
  export const getProductsByCategorySuccess = createAction('GET_CATEGORY_SUCCESS', props<{categoryProducts: Product[]}>());

  export const getProductSuccess = createAction('GET_PRODUCT_SUCCESS', props<{product: Product}>());

  export const getAllProductsSuccess = createAction('GET_ALL_PRODUCTS_SUCCESS', props<{products: Product[]}>());
}

export namespace UserActions {
  export const clickCatalog = createAction('CLICK_CATALOG');

  export const clickCategory = createAction('CLICK_CATEGORY', props<{categoryId: string}>());

  export const clickProduct = createAction('CLICK_PRODUCT', props<{id: string}>());
  
  export const clickAllProducts = createAction('CLICK_ALL_PRODUCTS');
  
  export const addBasket = createAction('ADD_BASKET', props<{product: Product, maxProduct: number}>());

  export const removeBasket = createAction('REMOVE_BASKET', props<{id: string}>());
}

export namespace AdminActions{
  export const initDashboard = createAction('INIT_DASHBOARD');

  export const removeProduct = createAction('REMOVE_PRODUCT', props<{id: string}>());

  export const removeProductSuccess = createAction('REMOVE_PRODUCT_SUCCESS', props<{id: string}>()); //нет Reducer
}
