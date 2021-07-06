import { Product, Category } from 'app/store/app.model';
import { createReducer, on } from '@ngrx/store';
import { UserActions } from './app.actions';

export interface Store {
  categorys?: Category[];
  basket?: Product[];
}

export const initionalState: Store = {
  
};

//Redusers
export const  Reducers = createReducer(
  initionalState,

  on(UserActions.getCategorySuccess, (state, action) => ({
    ...state,
    categorys: action.categorys,
  }))
);
