import { UserReducers } from './app.reducer';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  category: any;
}

export const reducers: ActionReducerMap<State> = {
  category: UserReducers
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
