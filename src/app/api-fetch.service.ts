import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productSchema } from './product.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiFetchService {
  private apiUrl = 'https://fakestoreapi.com/products'; // Replace with your API URL
  constructor(private http: HttpClient) { }
  getData(): Observable<productSchema[]> {
    return this.http.get<productSchema[]>(`${this.apiUrl}`);  }
}
