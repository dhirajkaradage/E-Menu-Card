import { Component } from "@angular/core";
import { OrderService } from "src/app/services/order/order.service";

@Component({
  selector: "app-order-listing",
  templateUrl: "./order-listing.component.html",
  styleUrls: ["./order-listing.component.css"],
})
export class OrderListingComponent {
  orderList: Array<any> = [];
  page: number = 0;
  size: number = 10;
  constructor(private orderService: OrderService) {}

  ngOnInit(){
    this.getProductListPagination()
  }

  getProductListPagination() {
    this.orderService.getOrdersPagination(this.page, this.size).subscribe({
      next: (res) => {
        console.log("thsi is res ", res);
        this.orderList = res.content;
      },
      error: (error) => {
        console.log("this is error ", error);
      },
    });
  }
}
