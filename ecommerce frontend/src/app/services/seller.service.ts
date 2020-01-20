import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SellerService {

  private baseUrl = 'http://localhost:8080/api/seller/';

  constructor(private http:HttpClient) { }

  getSellerList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'sellers-list');
  }

  createSeller(seller: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-seller', seller);
  }

  deleteSeller(id: string): Observable<any> {
    console.log(id);
    return this.http.delete(`${this.baseUrl}delete-seller/${id}`, { responseType: 'text' });
  }


  getSeller(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}${id}`);
  }

  updateSeller(id: string, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}update-seller/${id}`, value);
  }
  
}                                           