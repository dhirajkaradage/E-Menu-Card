import { Component } from "@angular/core";

@Component({
  selector: "app-product-listing",
  templateUrl: "./product-listing.component.html",
  styleUrls: ["./product-listing.component.css"],
})
export class ProductListingComponent {
  hotelList: Array<any> = [
    { name: "Tara", type: "Veg", address: "ichalkaranji", about: "Testing" },
    {
      name: "Cabsons",
      type: "BOTH",
      address: "ichalkaranji",
      about: "Testing",
    },
  ];
}
