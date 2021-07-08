import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './components/product/card-product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardProductComponent],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    CardProductComponent
  ],
})
export class SharedModule {}
