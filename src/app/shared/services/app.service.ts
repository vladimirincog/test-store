import { Category } from 'app/store/app.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getCategory() {
    return this.http.get<Category[]>('http://localhost:3000/category');
  }
}
