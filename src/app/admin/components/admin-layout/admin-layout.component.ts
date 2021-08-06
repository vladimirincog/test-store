import { AuthService } from 'app/admin/services/auth.service';
import { AdminActions, GlobalActions } from 'app/store/app.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { AdminSelectors } from 'app/store/app.selectors';
import { IToken } from 'app/store/app.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  token: Observable<IToken | null>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public store: Store,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.token = this.store.select(AdminSelectors.token);
  }

  logout() {
    this.authService.logout();
    this.store.dispatch(AdminActions.logout());
    this.router.navigate(['/admin', 'login']);
    this.store.dispatch(GlobalActions.showAlert({ text: 'Пока!', delay: 1000 }));
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
