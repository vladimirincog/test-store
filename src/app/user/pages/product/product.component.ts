import { Product } from 'app/store/app.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserActions } from 'app/store/app.actions';
import { Store } from '@ngrx/store';
import { UserSelector } from 'app/store/app.selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productId: string;
  product$: Observable<Product>;
  pieces: number = 1;

  constructor(public route: ActivatedRoute, public store: Store) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productId = params.id;
    });

    this.store.dispatch(
      UserActions.clickProduct({
        id: this.productId,
      })
    );

    this.product$ = this.store.select(UserSelector.product);
  }

  addBasket() {
    //если, кол-во в корзине + кол-во добавляемого > макс, то не добавляем и предупреждаем пользователя
    let product: Product;
    this.product$.subscribe((response) => (product = response));

    this.store.dispatch(
      UserActions.addBasket({
        product: { ...product, pieces: this.pieces.toString() },
      })
    );
  }

  increase(): void {
    this.pieces++;
  }

  decrease(): void {
    this.pieces--;
  }
}
