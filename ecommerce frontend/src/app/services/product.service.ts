import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private baseUrl = 'http://localhost:8080/api/product/';

  constructor(private http:HttpClient) { }

  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'products-list');
  }

  createProduct(product: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-product', product);
  }

  deleteProduct(id: string): Observable<any> {
    console.log(id);
    return this.http.delete(`${this.baseUrl}delete-product/${id}`, { responseType: 'text' });
  }


  getProduct(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}${id}`);
  }

  updateProduct(id: string, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}update-product/${id}`, value);
  }
  
}                                           