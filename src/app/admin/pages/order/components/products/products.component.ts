import { IProduct } from './../../../../../store/app.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'order-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  
  @Input() products: IProduct[] = new Array<IProduct>();
  displayedColumns: string[] = ['Name', 'Img', 'Price', 'Pieces'];
  
  constructor() {}

  ngOnInit(): void {}
}
