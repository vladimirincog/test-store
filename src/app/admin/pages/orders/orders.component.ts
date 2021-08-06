import { Observable, Subscription } from 'rxjs';
import { AdminActions, GlobalActions } from 'app/store/app.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AdminSelectors } from 'app/store/app.selectors';
import { IOrder, IProduct } from 'app/store/app.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  displayedColumnsOrder: string[] = [
    'ID',
    'Client',
    'Status',
    'Details',
    'Return',
    'Delete',
  ];
  searchStr: string = '';
  orders$: Observable<IOrder[]>;

  constructor(public store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(AdminActions.getOrders());
    this.orders$ = this.store.select(AdminSelectors.orders);
  }

  returnProducts(id: string) {
    let products: IProduct[] = new Array<IProduct>();
    let subOrders: Subscription;
    
    subOrders = this.orders$.subscribe(
      (orders: IOrder[]) =>
        (products = orders.find((order) => order.id === id).products)
    );

    //добавить проверку есть ли продукт в БД
    products.forEach((product: IProduct) =>
      this.store.dispatch(
        GlobalActions.increaseProductPieces({ product: product })
      )
    );
    subOrders.unsubscribe();
    this.store.dispatch(GlobalActions.showAlert({ text: 'Товары вернулись на склад (в БД)!', delay: 1500 }));
  }

  removeOrder(id: string) {
    this.store.dispatch(AdminActions.removeOrder({ id: id }));
    this.store.dispatch(GlobalActions.showAlert({ text: 'Заказ удален!', delay: 1500 }));
  }
}
