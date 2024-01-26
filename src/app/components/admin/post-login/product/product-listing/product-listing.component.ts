import { Component } from "@angular/core";
import { ProductService } from "src/app/services/product/product.service";

@Component({
  selector: "app-product-listing",
  templateUrl: "./product-listing.component.html",
  styleUrls: ["./product-listing.component.css"],
})
export class ProductListingComponent {
  productList: Array<any> = [];
  page: number = 0;
  size: number = 10;
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.getProductListPagination();
  }

  getProductListPagination() {
    this.productService
      .getAllProductsPagination(this.page, this.size)
      .subscribe({
        next: (res) => {
          console.log("thsi is res ", res);
          this.productList = res.content;
        },
        error: (error) => {
          console.log("this is error ", error);
        },
      });
  }
}
