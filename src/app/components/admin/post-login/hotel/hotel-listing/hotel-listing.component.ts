import { Component } from "@angular/core";

@Component({
  selector: "app-hotel-listing",
  templateUrl: "./hotel-listing.component.html",
  styleUrls: ["./hotel-listing.component.css"],
})
export class HotelListingComponent {
  hotelList: Array<any> = [
    { name: "Tara", type: "Veg", address: "ichalkaranji", about: "Testing" },
    { name: "Cabsons", type: "BOTH", address: "ichalkaranji", about: "Testing" },
  ];
}
