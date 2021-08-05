import { IOrder } from 'app/store/app.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  sendOrder(order: IOrder): Observable<IOrder> {
    return this.http.post<IOrder>(`${environment.apiUrl}/orders/`, order);
  }
}
