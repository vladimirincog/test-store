import { Category, Product } from 'app/store/app.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/category');
  }

  getProductsByCategoryId(categoryId: string): Observable<Product[]> {
    const params = new HttpParams();
    return this.http.get<Product[]>(`http://localhost:3000/products/`, {
      params: params.set('categoryId', categoryId),
    });
  }
}
