import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private baseUrl = 'http://localhost:8080/api/category/';

  constructor(private http:HttpClient) { }

  getCategoryList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'categorys-list');
  }

  createCategory(category: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-category', category);
  }

  deleteCategory(id: string): Observable<any> {
    console.log(id);
    return this.http.delete(`${this.baseUrl}delete-category/${id}`, { responseType: 'text' });
  }


  getCategory(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}${id}`);
  }

  updateCategory(id: string, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}update-category/${id}`, value);
  }
  
}                                           