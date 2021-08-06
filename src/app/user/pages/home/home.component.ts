import { GlobalSelectors } from 'app/store/app.selectors';
import { Store } from '@ngrx/store';
import { ICategory, IOrder } from './../../../store/app.model';
import { Observable } from 'rxjs';
import { BreakpointService } from './../../../shared/services/breakpoint.service';
import { Component, OnInit } from '@angular/core';
import { GlobalActions } from 'app/store/app.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  order$: Observable<IOrder>;
  categories$: Observable<ICategory[]>;
  errorStatus$: Observable<string>;
  searchStr: string = '';
  category: ICategory;

  constructor(public breakpoint: BreakpointService, public store: Store) {}

  displayedColumns: string[] = ['Name', 'Img', 'Price', 'Pieces'];

  ngOnInit(): void {
    this.store.dispatch(GlobalActions.getCategories());

    this.categories$ = this.store.select(GlobalSelectors.categories);

    this.order$ = this.store.select(GlobalSelectors.order);

    this.errorStatus$ = this.store.select(GlobalSelectors.errorStatus);

    this.randomCategory();
  }

  findOrder() {
    //номер заказа может состоять только из цифр
    if (+this.searchStr !== NaN) {
      this.store.dispatch(GlobalActions.getOrderById({ id: this.searchStr }));
    } else {
      this.searchStr = '';
    }
  }

  randomCategory() {
    this.categories$.subscribe((categories: ICategory[]) => {
      if (categories != undefined) {
        this.category =
          categories[Math.floor(Math.random() * categories.length)];
      }
    });
  }
}
