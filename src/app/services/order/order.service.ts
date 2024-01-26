import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
const baseUrl = "http://localhost:8080/eMenucard/";
@Injectable({
  providedIn: "root",
})
export class OrderService {
  private selectedCategory = new BehaviorSubject<any>([]);
  public activeCategory = this.selectedCategory.asObservable();

  setCategory(data: any) {
    this.selectedCategory.next(data);
  }
  constructor(private http: HttpClient) {}

  createOrder(orderFormValue: any): Observable<any> {
    return this.http.post(`${baseUrl}createOrder`, orderFormValue);
  }

  updateOrder(orderFormValue: any, orderId: any): Observable<any> {
    return this.http.post(`${baseUrl}updateOrder/${orderId}`, orderFormValue);
  }

  getAllOrders(): Observable<any> {
    return this.http.get(`${baseUrl}orderList`);
  }
}
