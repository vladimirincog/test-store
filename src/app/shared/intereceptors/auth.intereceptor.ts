import { AdminActions } from 'app/store/app.actions';
import { Store } from '@ngrx/store';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'app/admin/services/auth.service';
import { IToken } from 'app/store/app.model';
import { AdminSelectors } from 'app/store/app.selectors';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: IToken | null = null;

  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store
  ) {
    this.store
      .select(AdminSelectors.token)
      .subscribe((token: IToken) => (this.token = token));
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.token.accessToken !== null) {
      req = req.clone({
        setParams: {
          auth: this.token.accessToken,
        },
        headers: new HttpHeaders({
          auth: this.token.accessToken,
        }),
      });
    }
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        //console.log('[Interceptor Error]: ', error);
        if (error.status === 401) {
          this.store.dispatch(AdminActions.logout());
          this.router.navigate(['/admin', 'login'], {
            queryParams: {
              tokenExpired: true,
            },
          });
        } else if (error.status === 400) {
          this.router.navigate(['/admin', 'login'], {
            queryParams: {
              wrongData: true,
            },
          });
        }
        return throwError(error);
      })
    );
  }
}
