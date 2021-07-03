import { ProductComponent } from './shared/components/product/product.component';
import { BasketPageComponent } from './basket-page/basket-page.component';

import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';

const routes: Routes = [
  {
    path: '', 
    component: MainLayoutComponent,
    children: [
      {path: '', component: HomePageComponent},
      {path: 'product/:id', component: ProductComponent}, //
      {path: 'basket', component: BasketPageComponent},
      {path: 'catalog', component: CatalogPageComponent},
      {path: '', redirectTo: '/', pathMatch: 'full'}
    ]
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
