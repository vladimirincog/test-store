import { AdminService } from './../admin/services/admin.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppService } from 'app/shared/services/app.service';
import { map, mergeMap } from 'rxjs/operators';
import { AdminActions, GlobalActions, UserActions } from './app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, public AppService: AppService, public AdminService: AdminService) {}

  getCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GlobalActions.getCategories),
      mergeMap(() => {
        return this.AppService.getCategory().pipe(
          map((categories) => {
            return GlobalActions.getCategoriesSuccess({ categories: categories });
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
        return this.AppService.getProductsByCategoryId(
          response.categoryId
        ).pipe(
          map((products) => {
            return GlobalActions.getProductsByCategorySuccess({
              categoryProducts: products,
            });
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
            return GlobalActions.getProductSuccess({ product: product });
          })
        );
      })
    );
  });

  removeProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminActions.removeProduct),
      mergeMap((response) => {
        return this.AdminService.removeProductById(response.id).pipe(
          map((id) => {
            return AdminActions.removeProductSuccess({ id: id });
          })
        );
      })
    );
  });
}
