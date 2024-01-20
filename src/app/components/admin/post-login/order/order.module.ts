import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OrderRoutingModule } from "./order-routing.module";
import { AddUpdateOrderComponent } from "./order-listing/add-update-order/add-update-order.component";
import { OrderListingComponent } from "./order-listing/order-listing.component";

@NgModule({
  declarations: [OrderListingComponent, AddUpdateOrderComponent],
  imports: [CommonModule, OrderRoutingModule],
})
export class OrderModule {}
