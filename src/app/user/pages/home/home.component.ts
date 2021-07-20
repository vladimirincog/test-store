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
  searchStr: string = '';
  order: IOrder;
  categories: ICategory[];

  constructor(public breakpoint: BreakpointService, public store: Store) {}

  displayedColumns: string[] = ['Name', 'Img', 'Price', 'Pieces'];

  ngOnInit(): void {
    this.store.dispatch(GlobalActions.getCategories());
    this.store
      .select(GlobalSelectors.categories)
      .subscribe((categories: ICategory[]) => (this.categories = categories));
  }

  findOrder() {
    if (+this.searchStr !== NaN) {
      this.store.dispatch(GlobalActions.getOrderById({ id: this.searchStr }));
      this.store.select(GlobalSelectors.order).subscribe((order: IOrder) => this.order = order, (error) => console.log('Привет ', error))
    } else {
      this.searchStr = '';
    }
  }

}
