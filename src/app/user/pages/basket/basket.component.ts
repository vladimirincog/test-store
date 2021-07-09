import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'app/store/app.model';
import { UserSelector } from 'app/store/app.selectors';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {

  displayedColumns: string[] = ['Product', 'Pieces', 'Price', 'Sum', 'Delete'];
  products$: Observable<Product[]>;

  constructor(public store: Store) {}

  ngOnInit(): void {
    this.products$ = this.store.select(UserSelector.basket);
  }

  deleteProduct(){
    
  }

}
