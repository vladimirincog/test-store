import { createFeatureSelector, createSelector } from '@ngrx/store';
import { store } from './app.reducer';

export namespace UserSelector {
  export const featureSelector = createFeatureSelector<store>('category');

  export const category = createSelector(
    featureSelector,
    (state) => state.category
  );
}
