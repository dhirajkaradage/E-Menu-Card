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

  updateHotel(hotelFormValue: any, hotelId: any): Observable<any> {
    return this.http.put(`${baseUrl}updateHotel/${hotelId}`, hotelFormValue);
  }

  getHotelList(): Observable<any> {
    return this.http.get(`${baseUrl}hotelList`);
  }

  getHotelsPagination(page: any, size: any): Observable<any> {
    let params = {
      page: page,
      size: size,
    };
    return this.http.get(`${baseUrl}hotels`, { params: params });
  }

  getHotelDetails(hotelId: any): Observable<any> {
    return this.http.get(`${baseUrl}/viewHotel/${hotelId}`);
  }

  deleteHotel(hotelId: any): Observable<any> {
    return this.http.delete(`${baseUrl}deleteHotel/${hotelId}`);
  }
}
