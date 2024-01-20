import { Component } from '@angular/core';

@Component({
  selector: 'app-order-listing',
  templateUrl: './order-listing.component.html',
  styleUrls: ['./order-listing.component.css']
})
export class OrderListingComponent {
  hotelList: Array<any> = [
    { name: "Tara", type: "Veg", address: "ichalkaranji", about: "Testing" },
    { name: "Cabsons", type: "BOTH", address: "ichalkaranji", about: "Testing" },
  ];
}
