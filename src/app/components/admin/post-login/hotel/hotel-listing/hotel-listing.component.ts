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

  constructor(private hotelService: HotelService) {}
  
    
  
  ngOnInit() {
    this.hotelService.getHotelList().subscribe({
      next: (response) => {
        this.hotelList = response.content ;
        console.log("Api response", this.hotelList);
      },
                                                                                                                                                                                                            
      error: (error) => {
        console.log("Api error", error);
      },
    });                                                                 
  }
  
}
