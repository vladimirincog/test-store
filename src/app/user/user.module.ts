
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from 'app/shared/components/product/product.component';
import { BasketComponent } from './pages/basket/basket.component';

const routes: Routes = [{
  path: '',
  component: UserLayoutComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'basket', component: BasketComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
  ]
}]

@NgModule({
  declarations: [
    UserLayoutComponent,
    BasketComponent,
    CatalogComponent,
    HomeComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class UserModule {}
