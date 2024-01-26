import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private selectedCategory = new BehaviorSubject<string>("");
  public activeCategory = this.selectedCategory.asObservable();

  constructor(private http: HttpClient) {}

  setCategory(data: string) {
    this.selectedCategory.next(data);
  }
}
