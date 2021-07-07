import { UserSelector } from 'app/store/app.selectors';
import { Store } from '@ngrx/store';
import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserActions } from 'app/store/app.actions';
import { Observable } from 'rxjs';
import { Product } from 'app/store/app.model';
import { AppService } from 'app/shared/services/app.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoryId: string;
  products$: Observable<Product[]>;

  constructor(public route: ActivatedRoute, public store: Store) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.categoryId = params.id;
    });

    this.store.dispatch(
      UserActions.clickCategory({
        categoryId: this.categoryId,
      })
    );

    this.products$ = this.store.select(UserSelector.categoryProducts);
    //this.products$.subscribe((response) => console.log(response));
  }
}
