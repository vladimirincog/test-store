import { UserSelector } from 'app/store/app.selectors';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IProduct } from 'app/store/app.model';

@Component({
  selector: 'app-main-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss'],
})
export class UserLayoutComponent implements OnInit {
  amountBasket: number;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public store: Store
  ) {}
  ngOnInit(): void {
    this.store
      .select(UserSelector.basket)
      .subscribe(
        (products: IProduct[]) => (this.amountBasket = products.length)
      );
  }
}
