import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Store } from './app.reducer';

export const featureSelector = createFeatureSelector<Store>('store');

export namespace GlobalSelectors {
  export const categorys = createSelector(
    featureSelector,
    (state) => state.categorys
  );
  export const categoryProducts = createSelector(
    featureSelector,
    (state) => state.categoryProducts
  );
  export const product = createSelector(
    featureSelector,
    (state) => state.product
  );
  export const allProducts = createSelector(
    featureSelector,
    (state) => state.allProducts
  );
}

export namespace UserSelector {
  export const basket = createSelector(
    featureSelector,
    (state) => state.basket
  );
}
