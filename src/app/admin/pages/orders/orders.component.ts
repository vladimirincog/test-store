import { Observable } from 'rxjs';
import { AdminActions } from 'app/store/app.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AdminSelectors } from 'app/store/app.selectors';
import { IOrder } from 'app/store/app.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  displayedColumnsOrder: string[] = ['ID', 'Client', 'Status', 'Details' , 'Delete'];
  searchStr: String = '';
  orders$: Observable<IOrder[]>;
  constructor(public store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(AdminActions.getOrders());
    this.orders$ = this.store.select(AdminSelectors.orders);
  }

  removeOrder(id: string){

  }
}
