import { Сategory } from 'app/shared/interfaces';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppService } from 'app/shared/app.service';
import { map, mergeMap } from 'rxjs/operators';
import { UserActions } from './app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, public AppService: AppService) {}


  getCategory$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(UserActions.clickCategory),
      mergeMap(() => {
        return this.AppService.getCategoty().pipe(
          map((category) => {
            return UserActions.getCategorySuccess({ category: category });
          })
        );
      })
    );
  })

 /* getCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.clickCategory),
      mergeMap(() =>
        this.AppService.getCategoty().pipe(
          map((category) => {
            return UserActions.getCategorySuccess({ category: category });
          })
        )
      )
    )
  );*/
}
