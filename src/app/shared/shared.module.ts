import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductComponent } from '../components/product/product.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './matetial.module';

@NgModule({
  imports: [HttpClientModule, ReactiveFormsModule,  MaterialModule],
  exports: [HttpClientModule, ReactiveFormsModule,  MaterialModule],
  declarations: [ProductComponent],
})
export class SharedModule {}
