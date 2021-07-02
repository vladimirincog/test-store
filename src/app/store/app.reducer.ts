import { createReducer, on } from '@ngrx/store';
import { NameActions } from './app.actions';

//Интеерфейс
export interface name {

}

//Инициализация
export const initionalState: name = {
};

//Redusers
export const nameReducer = createReducer(
  initionalState,

  on(NameActions.action, (state) => ({
    ...state
  })),

);
