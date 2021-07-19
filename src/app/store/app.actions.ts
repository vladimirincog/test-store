import { ICategory, IProduct, IOrder } from 'app/store/app.model';
import { createAction, props} from '@ngrx/store';

export namespace GlobalActions{

  export const getCategories = createAction('GET_CATEGORIES');

  export const getCategoriesSuccess = createAction('GET_CATEGORIES_SUCCESS', props<{categories: ICategory[]}>());
  
  export const getProductsByCategorySuccess = createAction('GET_CATEGORY_SUCCESS', props<{categoryProducts: IProduct[]}>());

  export const getProductById = createAction('GET_PRODUCT_BY_ID', props<{id: string}>());

  export const getProductByIdSuccess = createAction('GET_PRODUCT_SUCCESS', props<{product: IProduct}>());

  export const getAllProductsSuccess = createAction('GET_ALL_PRODUCTS_SUCCESS', props<{products: IProduct[]}>());

  export const getOrderById = createAction('GET_ORDER_BY_ID', props<{id: string}>());

  export const getOrderByIdSuccess = createAction('GET_ORDER_BY_ID_SUCCESS', props<{order: IOrder}>());

  export const decreaseProductPieces = createAction('DECREASE_PRODUCT_PIECES', props<{product: IProduct}>());

  export const decreaseProductPiecesSuccess = createAction('DECREASE_PRODUCT_PIECES_SUCCESS', props<{product: IProduct}>());

  export const increaseProductPieces = createAction('INCREASE_PRODUCT_PIECES', props<{product: IProduct}>());

  export const increaseProductPiecesSuccess = createAction('INCREASE_PRODUCT_PIECES_SUCCESS', props<{product: IProduct}>());
}

export namespace UserActions {

  export const clickCategory = createAction('CLICK_CATEGORY', props<{categoryId: string}>());
  
  export const clickAllProducts = createAction('CLICK_ALL_PRODUCTS');
  
  export const addBasket = createAction('ADD_BASKET', props<{product: IProduct, maxProduct: number}>());

  export const removeBasket = createAction('REMOVE_BASKET', props<{id: string}>());

  export const sendOrder = createAction('SEND_ORDER', props<{order: IOrder}>());

  export const sendOrderSuccess = createAction('SEND_ORDER_SUCCESS', props<{order: IOrder}>());
}

export namespace AdminActions{
  export const initDashboard = createAction('INIT_DASHBOARD');

  export const removeProduct = createAction('REMOVE_PRODUCT', props<{id: string}>());

  export const removeProductSuccess = createAction('REMOVE_PRODUCT_SUCCESS', props<{id: string}>());

  export const createProduct = createAction('CREATE_PRODUCT', props<{product: IProduct}>());

  export const createProductSuccess = createAction('CREATE_PRODUCT_SUCCESS', props<{product: IProduct}>());

  export const getOrders = createAction('GET_ORDERS');

  export const getOrdersSuccess = createAction('GET_ORDERS_SUCCESS', props<{orders: IOrder[]}>());

  export const updateOrderStatus = createAction('UPDATE_ORDER_STATUS', props<{id:string, status: 'обрабатывается' | 'подтвержден' | 'выполнен' | 'отменен' }>());

  export const updateOrderStatusSuccess = createAction('UPDATE_ORDER_STATUS_SUCCESS', props<{order:IOrder}>());
  
  export const removeOrder = createAction('REMOVE_ORDER', props<{id: string}>());

  export const removeOrderSuccess = createAction('REMOVE_ORDER_SUCCESS', props<{id: string}>());
}
