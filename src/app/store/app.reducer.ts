import { Product, Category } from 'app/store/app.model';
import { createReducer, on } from '@ngrx/store';
import { UserActions } from './app.actions';

export interface Store {
  categorys?: Category[];
  categoryProducts?: Product[];
  product?: Product;
  basket?: Product[];
}

export const initialState: Store = {
  basket: new Array<Product>(),
};

//Reducers
export const Reducers = createReducer(
  initialState,

  on(UserActions.getCategorySuccess, (state, action) => ({
    ...state,
    categorys: action.categorys,
  })),
  on(UserActions.getProductsSuccess, (state, action) => ({
    ...state,
    categoryProducts: action.categoryProducts,
  })),
  on(UserActions.getProductSuccess, (state, action) => ({
    ...state,
    product: action.product,
  })),
  on(UserActions.addBasket, (state, action) => ({
    ...state,
    basket: [...state.basket, action.product],
  }))
);
