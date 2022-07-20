import { Observable } from 'rxjs';
import { GlobalSelectors } from 'app/store/app.selectors';
import { BreakpointService } from './../../../shared/services/breakpoint.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalActions } from 'app/store/app.actions';
import { ICategory } from 'app/store/app.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  categories$: Observable<ICategory[]>;

  constructor(public breakpoint: BreakpointService, public store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(GlobalActions.getCategories());
    this.categories$ = this.store.select(GlobalSelectors.categories);
  }
}
