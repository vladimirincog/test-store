import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { HomeComponent } from './pages/home/home.component';
import { BasketComponent } from './pages/basket/basket.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'catalog', component: CatalogComponent },
      { path: 'category/:id', component: CategoryComponent },
      { path: 'product/:id', component: ProductComponent },
      { path: 'basket', component: BasketComponent },
      { path: '', redirectTo: '/', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    UserLayoutComponent,
    BasketComponent,
    CatalogComponent,
    HomeComponent,
    CategoryComponent,
    ProductComponent,
    CarouselComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserModule {}
