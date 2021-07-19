import { IOrder } from './../../store/app.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchOrders',
})
export class SearchOrdersPipe implements PipeTransform {
  transform(orders: IOrder[], search = ''): IOrder[] {
    if (!search.trim()) {
      return orders;
    }

    return orders.filter((order) => {
        return order.id.toString().toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })
  }
}