import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';


import { MaterialModule } from './matetial.module';

@NgModule({
  imports: [HttpClientModule,  MaterialModule],
  exports: [HttpClientModule,  MaterialModule],
  declarations: [ProductComponent],
})
export class SharedModule {}
