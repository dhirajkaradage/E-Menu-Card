import { Component } from "@angular/core";
import { OrderService } from "src/app/services/order/order.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"],
})
export class OrderComponent {
  orderList: Array<any> = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.getOrderList();
  }

  getOrderList() {
    this.orderService.getAllOrders().subscribe({
      next: (res) => {
        console.log("thsi is res ", res);
        if (res) {
          this.orderList = res;
        }
      },
      error: (error) => {
        console.log("thsi is error ", error);
      },
    });
  }
}
