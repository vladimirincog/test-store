import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AdminActions } from 'app/store/app.actions';
import { Product } from 'app/store/app.model';
import { GlobalSelectors } from 'app/store/app.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'Name',
    'Img',
    'Price',
    'Pieces',
    'Edit',
    'Delete',
  ];
  products$: Observable<Product[]>;
  searchStr: string = '';

  constructor(public store: Store, public adminService: AdminService) {}

  ngOnInit(): void {
    this.store.dispatch(AdminActions.initDashboard());
    this.products$ = this.store.select(GlobalSelectors.allProducts);
  }

  editProduct(id: string) {}

  removeProduct(id: string): void {
    this.adminService.removeProductById(id).subscribe();
  }
}
