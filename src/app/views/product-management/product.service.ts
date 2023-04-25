import { Injectable } from '@angular/core';
import { Product } from '../../Models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:8082/PharmaLife/Product";

  constructor(private httpClient: HttpClient) { }
  
  getAllProductsExpired(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`+"/all-productsExpired");
  }
  getAllProductsNotExpired(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`+"/all-productsNotExpired");
  }
  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`+"/all-products");
  }
  
  OnDetailsProduct(idProduct: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}`+"/retrieve-product/"+`${idProduct}`);
  }

  statisticsProductCategory(): Observable<Map<String,number>>{
    return this.httpClient.get<Map<String,number>>(`${this.baseURL}`+"/statisticsProductCategory/");
  }
}