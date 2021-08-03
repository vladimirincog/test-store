import { IProduct, ICategory, IOrder, IToken } from 'app/store/app.model';
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
  token?: IToken;
  errorStatus: string;
}

export const initialState: Store = {
  basket: new Array<IProduct>(),
  categoryProducts: new Array<IProduct>(),
  allProducts: new Array<IProduct>(),
  orders: new Array<IOrder>(),
  errorStatus: '',
  token: {
    accessToken: localStorage.getItem('token'),
    expires: localStorage.getItem('token-exp'),
  },
};

export const Reducers = createReducer(
  initialState,

  //==========================USER=================================//
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

  //==========================ADMIN=================================//
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
  on(AdminActions.updateOrderStatusSuccess, (state, action) => {
    return {
      ...state,
      order: action.order,
    };
  }),
  on(AdminActions.loginSuccess, (state, action) => {
    return {
      ...state,
      token: {
        accessToken: action.token.accessToken,
        expires: action.token.expires,
      },
    };
  }),

  on(AdminActions.logout, (state) => {
    return {
      ...state,
      token: {
        accessToken: null,
        expires: null,
      },
    };
  }),

  //==========================GLOBAL=================================//
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
  on(GlobalActions.increaseProductPiecesSuccess, (state, action) => {
    return {
      ...state,
      //order: action.order,
    };
  }),
  on(AdminActions.removeOrderSuccess, (state, action) => {
    return {
      ...state,
      orders: state.orders.filter((order) => order.id !== action.id),
    };
  }),
  on(GlobalActions.getOrderByIdFailure, (state, action) => {
    return {
      ...state,
      errorStatus: action.errorStatus,
    };
  }),
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
  }))
);
