import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './matetial.module';

@NgModule({
  imports: [HttpClientModule, BrowserAnimationsModule, CommonModule, MaterialModule],
  exports: [HttpClientModule, BrowserAnimationsModule, CommonModule, MaterialModule],
  declarations: [
    ProductComponent
  ],
})
export class SharedModule {}
