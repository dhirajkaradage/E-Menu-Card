import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
const baseUrl = "http://localhost:8080/eMenucard/";
@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  createCategory(categoryFormValue: any): Observable<any> {
    return this.http.post(`${baseUrl}category`, categoryFormValue);
  }

  updateCategory(categoryFormValue: any, categoryId: any): Observable<any> {
    return this.http.put(
      `${baseUrl}category/${categoryId}`,
      categoryFormValue
    );
  }

  getCategoryList(): Observable<any> {
    return this.http.get(`${baseUrl}categories`);
  }

  getCategoryById(categoryId: any): Observable<any> {
    return this.http.get(`${baseUrl}category/${categoryId}`);
  }

  getCategoryListPagination(page: any, size: any): Observable<any> {
    let params = {
      page: page,
      size: size,
    };
    return this.http.get(`${baseUrl}allCategories`, { params: params });
  }


}
