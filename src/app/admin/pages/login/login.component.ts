import { AdminActions, GlobalActions } from 'app/store/app.actions';
import { AdminSelectors } from 'app/store/app.selectors';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from 'app/admin/services/auth.service';
import { IAuthResponse, IToken, IUser } from 'app/store/app.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: IUser;

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  submitted: boolean = false;
  constructor(
    public authService: AuthService,
    public router: Router,
    public store: Store,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store
      .select(AdminSelectors.token)
      .subscribe((token: IToken | null) => {
        //console.log("(LoginComponent_ngOnInit) token: ", token);
        if (token != null) {
          this.router.navigate(['/admin/dashboard']);
        }
      });

    this.route.queryParams.subscribe((params: Params) => {
      if (params['wrongData']) {
        this.store.dispatch(
          GlobalActions.showAlert({
            text: 'Не верные данные. Ошибка: 400!',
            delay: 2000,
          })
        );
      } else if (params['tokenExpired']) {
        this.store.dispatch(
          GlobalActions.showAlert({
            text: 'Сессия истекла. Введите данные заново. Ошибка: 401!',
            delay: 2000,
          })
        );
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      this.submitted = false;
      return;
    } else {
      const user: IUser = {
        email: this.form.get('email').value,
        password: this.form.get('password').value,
      };

      this.store.dispatch(AdminActions.login({ user: user }));
      this.router.navigate(['/admin', 'dashboard']);
      this.submitted = false;

      /*this.authService.login(user).subscribe(
        (response: IAuthResponse) => {
          console.log('response: ', response.accessToken);
          this.form.reset();
          this.router.navigate(['/admin', 'dashboard']);
          this.submitted = false;
        },
        (error) => {
          this.submitted = false;
          console.log('error: ', error);
        }
      );*/
    }

    //this.authService.loginMock().subscribe(response => console.log(response))
  }
}
