import { Component } from '@angular/core';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent {
  hotelList: Array<any> = [
    { name: "Tara", type: "Veg", address: "ichalkaranji", about: "Testing" },
    { name: "Cabsons", type: "BOTH", address: "ichalkaranji", about: "Testing" },
  ];
}
