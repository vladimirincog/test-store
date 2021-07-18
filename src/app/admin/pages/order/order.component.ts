import { AppService } from 'app/shared/services/app.service';
import { Observable } from 'rxjs';
import { GlobalSelectors } from 'app/store/app.selectors';
import { GlobalActions } from 'app/store/app.actions';
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
  constructor(public route: ActivatedRoute, public store: Store) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.orderId = params.id;
    });
    this.store.dispatch(GlobalActions.getOrderById({ id: this.orderId }));
    this.order$ = this.store.select(GlobalSelectors.order);
  }
}
