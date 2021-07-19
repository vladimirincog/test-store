import { AdminService } from 'app/admin/services/admin.service';
import { OrderService } from './services/order-service';
import { BreakpointService } from './../../../shared/services/breakpoint.service';
import { Observable } from 'rxjs';
import { GlobalSelectors } from 'app/store/app.selectors';
import { AdminActions, GlobalActions } from 'app/store/app.actions';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { IOrder } from 'app/store/app.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orderId: string;
  order$: Observable<IOrder>;
  value;

  constructor(
    public route: ActivatedRoute,
    public store: Store,
    public breakpoint: BreakpointService,
    public orderService: OrderService,
    public adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.orderId = params.id;
    });
    this.store.dispatch(GlobalActions.getOrderById({ id: this.orderId }));
    this.order$ = this.store.select(GlobalSelectors.order);
  }

  updateStatus(
    value: 'обрабатывается' | 'подтвержден' | 'выполнен' | 'отменен'
  ): void {
    this.store.dispatch(
      AdminActions.updateOrderStatus({ id: this.orderId, status: value })
    );
    this.order$ = this.store.select(GlobalSelectors.order);
  }
}
