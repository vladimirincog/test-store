import { Product, Сategory } from 'app/shared/interfaces';
import { createReducer, on } from '@ngrx/store';
import { UserActions } from './app.actions';

//Интеерфейс
export interface store {
  category?: Сategory[];
  basket?: Product[];
}

//Инициализация
export const initionalState: store = {
  
};

//Redusers
export const  UserReducers = createReducer(
  initionalState,

  on(UserActions.getCategorySuccess, (state, action) => ({
    ...state,
    category: action.category,
  }))
);
