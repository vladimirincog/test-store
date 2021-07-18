import { AppService } from 'app/shared/services/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IClient, IOrder, IProduct } from 'app/store/app.model';
import { UserSelectors } from 'app/store/app.selectors';
import { UserActions, GlobalActions } from 'app/store/app.actions';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  displayedColumnsBasket: string[] = [
    'Product',
    'Pieces',
    'Price',
    'Sum',
    'Delete',
  ];
  displayedColumnsOrder: string[] = ['Product', 'Pieces', 'Price', 'Sum'];
  products$: Observable<IProduct[]>;
  client: IClient = {
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
  };
  order: IOrder;
  sum: number = 0;

  informationForm: FormGroup = new FormGroup({
    lastName: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(public store: Store, public appService: AppService) {}

  ngOnInit(): void {
    this.products$ = this.store.select(UserSelectors.basket);
    this.products$.subscribe((products: IProduct[]) => {
      products.forEach(
        (product) => (this.sum += +product.price * product.pieces)
      );
    });
  }

  removeProduct(id: string) {
    this.store.dispatch(UserActions.removeBasket({ id: id }));
  }

  createOrder() {
    let products: IProduct[];
    this.products$.subscribe((response) => {
      products = response;
    });

    this.client = {
      firstName: this.informationForm.get('firstName').value,
      lastName: this.informationForm.get('lastName').value,
      address: this.informationForm.get('address').value,
      phone: this.informationForm.get('phone').value,
      email: this.informationForm.get('email').value,
    };

    this.order = {
      products: products,
      client: this.client,
      status: 'обрабатывается',
    };
  }

  sendOrder() {
    this.store.dispatch(UserActions.sendOrder({ order: this.order }));
    this.order.products.forEach((product: IProduct) =>
      this.store.dispatch(
        GlobalActions.decreaseProductPieces({ product: product })
      )
    );
  }
}
