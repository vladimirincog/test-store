import { Component, OnInit } from '@angular/core';
import { Category } from 'app/store/app.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserActions } from 'app/store/app.actions';
import { UserSelector } from 'app/store/app.selectors';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  categorys$: Observable<Category[]>;
  searchStr: string;

  constructor(private http: HttpClient, private store: Store) {}

  ngOnInit(): void {
    this.fetchCategory();
    this.categorys$ = this.store.select(UserSelector.categorys);
  }

  fetchCategory(): void {
    this.store.dispatch(UserActions.clickCatalog());
  }
}
