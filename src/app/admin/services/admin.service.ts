import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder, IProduct } from 'app/store/app.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  removeProductById(id: string): Observable<string> {
    return this.http
      .delete<string>(`${environment.apiUrl}/products/${id}`)
      .pipe(
        map((data) => {
          return id;
        })
      );
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${environment.apiUrl}/products/`, product);
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.patch<IProduct>(
      `${environment.apiUrl}/products/${product.id}`,
      product
    );
  }

  getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${environment.apiUrl}/orders`);
  }

  updateOrderStatus(
    id: string,
    status: 'обрабатывается' | 'подтвержден' | 'выполнен' | 'отменен'
  ) {
    return this.http.patch(`http://localhost:3000/orders/${id}`, {
      status: status,
    });
  }

  removeOrderById(id: string): Observable<string> {
    return this.http
      .delete<string>(`${environment.apiUrl}/orders/${id}`)
      .pipe(
        map((data) => {
          return id;
        })
      );
  }
}
