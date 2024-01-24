import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
const baseUrl = "http://localhost:8080/eMenucard/";

@Injectable({
  providedIn: "root",
})
export class HotelService {
  constructor(private http: HttpClient) {}

  createHotel(hotelFormValue: any): Observable<any> {
    return this.http.post(`${baseUrl}saveHotel`, hotelFormValue);
  }

  getHotelList():Observable<any>{
    return this.http.get(`${baseUrl}hotels`);   
  }

  postHotelList(hotelId: any): Observable<any>{
    return this.http.get(`${baseUrl}/viewHotel/${hotelId}`); 
  }
}
      