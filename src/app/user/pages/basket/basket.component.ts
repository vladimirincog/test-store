import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'app/store/app.model';
import { UserSelector } from 'app/store/app.selectors';
import { UserActions } from 'app/store/app.actions';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {

  displayedColumns: string[] = ['Product', 'Pieces', 'Price', 'Sum', 'Delete'];
  products$: Observable<Product[]>;
  sum: number = 0;

  constructor(public store: Store) {}

  ngOnInit(): void {
    this.products$ = this.store.select(UserSelector.basket);
    this.products$.subscribe((products: Product[]) => {
      products.forEach((product) => this.sum += +product.price * product.pieces)
    })
  }

  removeProduct(id: string){
    this.store.dispatch(UserActions.removeBasket({id: id}));
  }

}
