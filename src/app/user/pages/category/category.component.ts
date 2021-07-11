import { GlobalSelectors} from 'app/store/app.selectors';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserActions } from 'app/store/app.actions';
import { Observable } from 'rxjs';
import { Product } from 'app/store/app.model';
import { BreakpointService } from 'app/shared/services/breakpoint.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoryId: string;
  products$: Observable<Product[]>;
  searchStr: string = '';

  constructor(
    public route: ActivatedRoute,
    public store: Store,
    public breakpoint: BreakpointService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.categoryId = params.id;
    });

    if (this.categoryId !== 'all') {
      this.store.dispatch(
        UserActions.clickCategory({
          categoryId: this.categoryId,
        })
      );
      this.products$ = this.store.select(GlobalSelectors.categoryProducts);
    } else {
      this.store.dispatch(UserActions.clickAllProducts());
      this.products$ = this.store.select(GlobalSelectors.allProducts);
    }
  }
}
