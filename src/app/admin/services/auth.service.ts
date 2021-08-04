import { catchError, tap } from 'rxjs/operators';
import { IAuthResponse } from '../../store/app.model';
import { Observable, throwError, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from 'app/store/app.model';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public error$: Subject<string> = new Subject<string>();

  get token(): string {
    const expDate = new Date(localStorage.getItem('token-exp'));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('token');
  }

  constructor(private router: Router, private http: HttpClient) {}

  login(user: IUser): Observable<IAuthResponse> {
    return this.http
      .post<IAuthResponse>(`${environment.authUrl}/login`, user)
      .pipe(tap(this.setToken), catchError(this.handleError.bind(this)));
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private handleError(error: HttpErrorResponse) {
    /*const { message } = error.error.error;
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Такого email нет');
        break;
      case 'INVALID_EMAIL':
        this.error$.next('Неверный email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Неверный пароль');
        break;
    }*/
    //console.log(message)
    return throwError(error);
  }

  private setToken(response: IAuthResponse | null) {
    if (response != null) {
      const expDate = new Date(new Date().getTime() + 60 * 60 * 1000);

      localStorage.setItem('token', response.accessToken);
      localStorage.setItem('token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
