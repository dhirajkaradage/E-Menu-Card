import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
const baseUrl = "http://localhost:8080/eMenucard/";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  createProduct(productFormValue: any): Observable<any> {
    return this.http.post(`${baseUrl}product`, productFormValue);
  }

  updateProduct(productFormValue: any, productId: any): Observable<any> {
    return this.http.put(
      `${baseUrl}updateProduct/${productId}`,
      productFormValue
    );
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`${baseUrl}productList`);
  }

  getAllProductsPagination(page: any, size: any): Observable<any> {
    let params = {
      page: page,
      size: size,
    };
    return this.http.get(`${baseUrl}allProducts`, { params: params });
  }

  getProductById(productId: any): Observable<any> {
    return this.http.get(`${baseUrl}viewProduct/${productId}`);
  }
}
