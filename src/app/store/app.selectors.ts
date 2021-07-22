import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Store } from './app.reducer';

export const featureSelector = createFeatureSelector<Store>('store');

export namespace GlobalSelectors {
  export const categories = createSelector(
    featureSelector,
    (state) => state.categories
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

  export const order = createSelector(
    featureSelector,
    (state) => state.order
  );

  export const errorStatus = createSelector(
    featureSelector,
    (state) => state.errorStatus
  );
}

export namespace UserSelectors {
  export const basket = createSelector(
    featureSelector,
    (state) => state.basket
  );
}

export namespace AdminSelectors {
  export const orders = createSelector(
    featureSelector,
    (state) => state.orders
  );
}
