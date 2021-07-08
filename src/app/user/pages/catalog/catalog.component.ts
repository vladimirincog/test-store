import { Component, OnInit } from '@angular/core';
import { Category } from 'app/store/app.model';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserActions } from 'app/store/app.actions';
import { UserSelector } from 'app/store/app.selectors';

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
    this.store.dispatch(UserActions.clickCatalog());
    this.categorys$ = this.store.select(UserSelector.categorys);
  }
}
