import { mergeMap, switchMap, tap } from 'rxjs/operators';
import { ICategory, IOrder, IProduct } from 'app/store/app.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('http://localhost:3000/category');
  }

  getProductsByCategoryId(categoryId: string): Observable<IProduct[]> {
    const params = new HttpParams();
    return this.http.get<IProduct[]>(`http://localhost:3000/products/`, {
      params: params.set('categoryId', categoryId),
    });
  }

  getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/products');
  }

  getOrderById(id: string): Observable<IOrder> {
    return this.http.get<IOrder>(`http://localhost:3000/orders/${id}`);
  }

  decreaseProductPieces(product: IProduct): Observable<IProduct> {
    return this.getProductById(product.id).pipe(
      mergeMap((oldProduct: IProduct) => {
        return this.http.put<IProduct>(
          `http://localhost:3000/products/${product.id}`,
          {
            ...product,
            pieces: (+oldProduct.pieces - +product.pieces).toString(),
          }
        );
      })
    );
  }

  increaseProductPieces(product: IProduct): Observable<IProduct> {
    return this.getProductById(product.id).pipe(
      mergeMap((oldProduct: IProduct) => {
        return this.http.put<IProduct>(
          `http://localhost:3000/products/${product.id}`,
          {
            ...product,
            pieces: (+oldProduct.pieces + +product.pieces).toString(),
          }
        );
      })
    );
  }
}
