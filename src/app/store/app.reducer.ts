import { IProduct, ICategory, IOrder } from 'app/store/app.model';
import { createReducer, on } from '@ngrx/store';
import { AdminActions, GlobalActions, UserActions } from './app.actions';

export interface Store {
  categories?: ICategory[];
  categoryProducts?: IProduct[];
  allProducts?: IProduct[];
  product?: IProduct;
  basket?: IProduct[];
  orders?: IOrder[];
  order?: IOrder;
}

export const initialState: Store = {
  basket: new Array<IProduct>(),
  categoryProducts: new Array<IProduct>(),
  allProducts: new Array<IProduct>(),
  orders: new Array<IOrder>(),
};

//Reducers
export const Reducers = createReducer(
  initialState,

  on(GlobalActions.getCategoriesSuccess, (state, action) => ({
    ...state,
    categories: action.categories,
  })),
  on(GlobalActions.getProductsByCategorySuccess, (state, action) => ({
    ...state,
    categoryProducts: action.categoryProducts,
  })),
  on(GlobalActions.getProductByIdSuccess, (state, action) => ({
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
      let newBasket: IProduct[] = JSON.parse(JSON.stringify(state.basket));

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
    let newBasket: IProduct[] = JSON.parse(JSON.stringify(state.basket)).filter(
      (product) => product.id !== action.id
    );

    return {
      ...state,
      basket: newBasket,
    };
  }),
  on(UserActions.sendOrderSuccess, (state, action) => {
    return {
      ...state,
      basket: new Array<IProduct>(),
    };
  }),

  on(AdminActions.removeProductSuccess, (state, action) => {
    return {
      ...state,
      allProducts: state.allProducts.filter(
        (product) => product.id != action.id
      ),
    };
  }),
  on(AdminActions.createProductSuccess, (state, action) => {
    return {
      ...state,
      allProducts: [...state.allProducts, action.product],
    };
  }),
  on(AdminActions.getOrdersSuccess, (state, action) => {
    return {
      ...state,
      orders: action.orders,
    };
  }),
  on(GlobalActions.getOrderByIdSuccess, (state, action) => {
    return {
      ...state,
      order: action.order,
    };
  }),
  on(GlobalActions.decreaseProductPiecesSuccess, (state, action) => {
    return {
      ...state,
      //order: action.order,
    };
  }),
);
