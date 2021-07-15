import { IOrder } from 'app/store/app.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  sendOrder(order: IOrder): Observable<IOrder> {
    return this.http.post<IOrder>(`http://localhost:3000/orders/`, order);
  }
}
