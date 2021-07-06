import { Store, Reducers } from './app.reducer';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  store: Store;
}

export const reducers: ActionReducerMap<State> = {
  store: Reducers
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
