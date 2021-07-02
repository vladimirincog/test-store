import { createFeatureSelector, createSelector } from '@ngrx/store';
import { name } from './app.reducer';

export namespace CounterSelector {
  export const featureSelector = createFeatureSelector<name>('name');

  export const state = createSelector(
    featureSelector,
    (state) => state
  );
}
