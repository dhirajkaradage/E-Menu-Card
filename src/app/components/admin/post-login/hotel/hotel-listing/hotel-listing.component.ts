import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { HotelService } from "src/app/services/hotel/hotel.service";

@Component({
  selector: "app-hotel-listing",
  templateUrl: "./hotel-listing.component.html",
  styleUrls: ["./hotel-listing.component.css"],
})
export class HotelListingComponent {
  hotelList: Array<any> = [];
  page: number = 0;
  size: number = 10;

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.getHotelListPagination();
  }

  getHotelListPagination() {
    this.hotelService.getHotelsPagination(this.page, this.size).subscribe({
      next: (response) => {
        this.hotelList = response.content;
        console.log("Api response", this.hotelList);
      },

      error: (error) => {
        console.log("Api error", error);
      },
    });
  }
}
