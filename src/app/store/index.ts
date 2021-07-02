import { nameReducer } from './app.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  counter: nameReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
