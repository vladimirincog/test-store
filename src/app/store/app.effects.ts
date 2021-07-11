import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppService } from 'app/shared/services/app.service';
import { delay, map, mergeMap } from 'rxjs/operators';
import { AdminActions, GlobalActions, UserActions} from './app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, public AppService: AppService) {}

  getCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.clickCatalog),
      mergeMap(() => {
        return this.AppService.getCategory().pipe(
          map((categorys) => {
            return GlobalActions.getCategorySuccess({ categorys: categorys });
          })
        );
      })
    );
  });

  getAllProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.clickAllProducts, AdminActions.initDashboard),
      mergeMap(() => {
        return this.AppService.getAllProducts().pipe(
          map((products) => {
            return GlobalActions.getAllProductsSuccess({ products: products });
          })
        );
      })
    );
  });

  getProductsByCategoryId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.clickCategory),
      mergeMap((response) => {
        return this.AppService.getProductsByCategoryId(response.categoryId).pipe(
          map((products) => {
            return GlobalActions.getProductsByCategorySuccess({ categoryProducts: products });
          })
        );
      })
    );
  });

  getProductById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.clickProduct),
      mergeMap((response) => {
        return this.AppService.getProductById(response.id).pipe(
          map((product) => {
            return GlobalActions.getProductSuccess({product: product})
          })
        )
      })
    )
  })
}
