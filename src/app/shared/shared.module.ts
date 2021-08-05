import { SearchPipe } from './pipes/search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardProductComponent } from './components/product/card-product.component';

@NgModule({
  declarations: [CardProductComponent, SearchPipe],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    CardProductComponent,
    SearchPipe,
    FormsModule,
  ],
})
export class SharedModule {}
