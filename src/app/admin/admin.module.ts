import { LoginComponent } from './pages/login/login.component';
import { EditComponent } from './pages/edit/edit.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateComponent } from './pages/create/create.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/order/components/products/products.component';
import { ClientComponent } from './pages/order/components/client/client.component';

import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { OrderComponent } from './pages/order/order.component';
import { SearchOrdersPipe } from './pipes/search-order.pipe';


const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
        //canActivate: [],
      },
      {
        path: 'create',
        component: CreateComponent,
        //canActivate: [],
      },
      {
        path: 'orders',
        component: OrdersComponent,
        //canActivate: [],
      },
      {
        path: 'order/:id',
        component: OrderComponent,
        //canActivate: [],
      },
      {
        path: 'edit/:id',
        component: EditComponent,
        //canActivate: [],
      },

      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    CreateComponent,
    DashboardComponent,
    EditComponent,
    LoginComponent,
    OrdersComponent,
    OrderComponent,
    ProductsComponent,
    ClientComponent,
    SearchOrdersPipe
  ],
  imports: [ReactiveFormsModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AdminModule {}
