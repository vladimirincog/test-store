import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
  ],
  declarations: [ProductComponent],
})
export class SharedModule {}
