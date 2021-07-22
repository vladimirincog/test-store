import { Store } from '@ngrx/store';
import { AdminService } from 'app/admin/services/admin.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppService } from 'app/shared/services/app.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AdminActions, GlobalActions, UserActions } from './app.actions';
import { UserService } from 'app/user/services/user.service';
import { ICategory, IOrder, IProduct } from './app.model';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    public AppService: AppService,
    public AdminService: AdminService,
    public UserService: UserService,
    public store: Store
  ) {}

  getCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GlobalActions.getCategories),
      mergeMap(() => {
        return this.AppService.getCategory().pipe(
          map((categories: ICategory[]) => {
            return GlobalActions.getCategoriesSuccess({
              categories: categories,
            });
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
          map((products: IProduct[]) => {
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
          map((products: IProduct[]) => {
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
      ofType(GlobalActions.getProductById),
      mergeMap((response) => {
        return this.AppService.getProductById(response.id).pipe(
          map((product: IProduct) => {
            return GlobalActions.getProductByIdSuccess({ product: product });
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
          map((id: string) => {
            return AdminActions.removeProductSuccess({ id: id });
          })
        );
      })
    );
  });

  createProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminActions.createProduct),
      mergeMap((response) => {
        return this.AdminService.createProduct(response.product).pipe(
          map((product: IProduct) => {
            return AdminActions.createProductSuccess({ product: product });
          })
        );
      })
    );
  });

  sendOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.sendOrder),
      mergeMap((response) => {
        return this.UserService.sendOrder(response.order).pipe(
          map((order: IOrder) => {
            return UserActions.sendOrderSuccess({ order: order });
          })
        );
      })
    );
  });

  getOrders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminActions.getOrders),
      mergeMap(() => {
        return this.AdminService.getOrders().pipe(
          map((orders: IOrder[]) => {
            return AdminActions.getOrdersSuccess({ orders: orders });
          })
        );
      })
    );
  });

  getOrderById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GlobalActions.getOrderById),
      mergeMap((response) => {
        return this.AppService.getOrderById(response.id).pipe(
          map((order: IOrder) => {
            this.store.dispatch(GlobalActions.getOrderByIdFailure({errorStatus : ""}))
            return GlobalActions.getOrderByIdSuccess({ order: order });
          }),
          catchError((errorStatus) =>
            of(GlobalActions.getOrderByIdFailure({ errorStatus }))
          )
        );
      })
    );
  });

  decreaseProductPieces$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GlobalActions.decreaseProductPieces),
      mergeMap((response) => {
        return this.AppService.decreaseProductPieces(response.product).pipe(
          map((product: IProduct) => {
            return GlobalActions.decreaseProductPiecesSuccess({
              product: product,
            });
          })
        );
      })
    );
  });

  increaseProductPieces$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GlobalActions.increaseProductPieces),
      mergeMap((response) => {
        return this.AppService.increaseProductPieces(response.product).pipe(
          map((product) => {
            return GlobalActions.increaseProductPiecesSuccess({
              product: product,
            });
          })
        );
      })
    );
  });

  updateOrderStatus$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminActions.updateOrderStatus),
      mergeMap((response) => {
        return this.AdminService.updateOrderStatus(
          response.id,
          response.status
        ).pipe(
          map((order: IOrder) => {
            return AdminActions.updateOrderStatusSuccess({ order: order });
          })
        );
      })
    );
  });

  removeOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminActions.removeOrder),
      mergeMap((response) => {
        return this.AdminService.removeOrderById(response.id).pipe(
          map((id: string) => {
            return AdminActions.removeOrderSuccess({ id: id });
          })
        );
      })
    );
  });
}
