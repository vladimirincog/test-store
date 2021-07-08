import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'app/store/app.model';

@Component({
  selector: 'card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {
  constructor() {}

  @Input() product: Product;

  ngOnInit(): void {}
}
