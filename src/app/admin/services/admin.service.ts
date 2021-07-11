import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AdminService {
  
  constructor(private http: HttpClient) {}

  removeProductById(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/products/${id}`);
  }
}
