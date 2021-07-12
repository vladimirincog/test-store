import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'app/store/app.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  removeProductById(id: string): Observable<string> {
    return this.http
      .delete<string>(`http://localhost:3000/products/${id}`)
      .pipe(
        map((data) => {
          return id;
        })
      );
  }

  createProduct(product: Product): Observable<Product>  {
    return this.http.post<Product>(`http://localhost:3000/products/`, product);
  }

  updateProduct(product: Product): Observable<Product>{
    return this.http.patch<Product>(`http://localhost:3000/products/${product.id}`, product);
  }
}
