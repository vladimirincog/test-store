import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
  declarations: [
    MainLayoutComponent,
    ProductComponent
  ],
})
export class AppSharedModule {}
