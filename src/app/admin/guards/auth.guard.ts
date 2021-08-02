import { Observable } from 'rxjs';
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
  token: Observable<IToken>;

  constructor(private router: Router, private store: Store) {
    this.token = this.store.select(AdminSelectors.token);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (
      this.token.subscribe((token: IToken | null) => {
        if (token != null) {
          return true;
        }
      })
    ) {
      //localStorage.getItem('token')
       return true;
    } else {
      this.router.navigate(['/admin/login'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
  }
}
