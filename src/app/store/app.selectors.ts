import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Store } from './app.reducer';

export namespace UserSelector {
  export const featureSelector = createFeatureSelector<Store>('store');

  export const category = createSelector(
    featureSelector,
    (state) => state.categorys
  );
}
