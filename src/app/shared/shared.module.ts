import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
  declarations: [
    ProductComponent
  ],
})
export class SharedModule {}
