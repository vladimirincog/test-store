import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'app/store/app.model';

@Component({
  selector: 'card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {
  constructor(public router: Router) {}

  @Input() product: IProduct;

  ngOnInit(): void {}
}
