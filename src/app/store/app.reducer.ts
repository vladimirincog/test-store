import { Product, Category } from 'app/store/app.model';
import { createReducer, on } from '@ngrx/store';
import { UserActions } from './app.actions';

export interface Store {
  categorys?: Category[];
  categoryProducts?: Product[];
  basket?: Product[];
}

export const initialState: Store = {

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
  }))
);
