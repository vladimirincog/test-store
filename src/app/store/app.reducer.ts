import { Product, Category } from 'app/store/app.model';
import { createReducer, on } from '@ngrx/store';
import { GlobalActions, UserActions } from './app.actions';

export interface Store {
  categories?: Category[];
  categoryProducts?: Product[];
  allProducts?: Product[];
  product?: Product;
  basket?: Product[];
}

export const initialState: Store = {
  basket: new Array<Product>(),
};

//Reducers
export const Reducers = createReducer(
  initialState,

  on(GlobalActions.getCategorySuccess, (state, action) => ({
    ...state,
    categories: action.categories,
  })),
  on(GlobalActions.getProductsByCategorySuccess, (state, action) => ({
    ...state,
    categoryProducts: action.categoryProducts,
  })),
  on(GlobalActions.getProductSuccess, (state, action) => ({
    ...state,
    product: action.product,
  })),

  on(GlobalActions.getAllProductsSuccess, (state, action) => ({
    ...state,
    allProducts: action.products,
  })),

  on(UserActions.addBasket, (state, action) => {
    let prdIdx: number = state.basket.findIndex(
      (product) => product.id === action.product.id
    );

    if (prdIdx !== -1) {
      let newBasket: Product[] = JSON.parse(JSON.stringify(state.basket));

      if (
        newBasket[prdIdx].pieces + action.product.pieces <
        action.maxProduct
      ) {
        newBasket[prdIdx].pieces += action.product.pieces;
      } else {
        newBasket[prdIdx].pieces = action.maxProduct;
      }

      return {
        ...state,
        basket: newBasket,
      };
    } else {
      return {
        ...state,
        basket: [...state.basket, action.product],
      };
    }
  }),

  on(UserActions.removeBasket, (state, action) => {
    let newBasket: Product[] = JSON.parse(JSON.stringify(state.basket)).filter(
      (product) => product.id !== action.id
    );

    return {
      ...state,
      basket: newBasket,
    };
  })
);
