import { IProduct } from 'app/store/app.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProducts',
})
export class SearchPipe implements PipeTransform {
  transform(products: IProduct[], search = ''): IProduct[] {
    if (!search.trim()) {
      return products;
    }
    return products.filter(products => {
        return products.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })
  }
}
