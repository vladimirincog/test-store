import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  statuses: Array<string> = [
    'обрабатывается',
    'подтвержден',
    'выполнен',
    'отменен',
  ];

  
  /*excludeStatus(
    status: 'обрабатывается' | 'подтвержден' | 'выполнен' | 'отменен'
  ): Array<string> {
    return this.statuses.filter((el) => el != status);
  }*/
}
