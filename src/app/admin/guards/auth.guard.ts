import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AdminSelectors } from 'app/store/app.selectors';
import { IToken } from 'app/store/app.model';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  token: IToken;

  constructor(private router: Router, private store: Store) {
    this.store
      .select(AdminSelectors.token)
      .subscribe((token: IToken) => (this.token = token));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.token.accessToken !== null) {
      return true;
    } else {
      this.router.navigate(['/admin', 'login'], {
        //queryParams: { returnUrl: state.url },
      });
      return false;
    }
  }
}
