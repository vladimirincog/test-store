import { Component, OnInit } from '@angular/core';
import { Сategory } from 'app/store/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserActions } from 'app/store/app.actions';
import { UserSelector } from 'app/store/app.selectors';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  cards: Observable<Сategory[]>;
  searchStr: string;

  constructor(private http: HttpClient, private store: Store) {}

  ngOnInit(): void {
    this.fetchCategory();
    this.cards = this.store.select(UserSelector.category);
  }

  fetchCategory(): void {
    this.store.dispatch(UserActions.clickCategory());
  }
}
