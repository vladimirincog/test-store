import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppService } from 'app/shared/services/app.service';
import { map, mergeMap } from 'rxjs/operators';
import { UserActions } from './app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, public AppService: AppService) {}

  getCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.clickCatalog),
      mergeMap(() => {
        return this.AppService.getCategory().pipe(
          map((categorys) => {
            return UserActions.getCategorySuccess({ categorys: categorys });
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
            return UserActions.getProductsSuccess({ categoryProducts: products });
          })
        );
      })
    );
  });
}
