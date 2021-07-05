import { Сategory } from 'app/shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getCategoty() {
    return this.http.get<any>('http://localhost:3000/category'); //<Сategory[]>
  }
}
