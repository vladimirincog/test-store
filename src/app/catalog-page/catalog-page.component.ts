import { Component, OnInit } from '@angular/core';
import { Сategory } from 'app/shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserActions } from 'app/store/app.actions';
import { UserSelector } from 'app/store/app.selectors';

@Component({
  selector: 'app-product-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
})
export class CatalogPageComponent implements OnInit {
  cards: Observable<Сategory[]>;

  constructor(private http: HttpClient, private store: Store) {}

  ngOnInit(): void {
    this.fetchCategory();
    this.cards = this.store.select(UserSelector.category);
  }

  fetchCategory(): void {
    this.store.dispatch(UserActions.clickCategory());
  }
}
