import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CartComponent } from "./cart/cart.component";
import { OrderComponent } from "./order/order.component";

const routes: Routes = [
  { path: "", redirectTo: "hotel/:id", pathMatch: "full" },
  { path: "hotel/:id", component: HomeComponent, pathMatch: "full" },
  { path: "hotel/:id/cart", component: CartComponent, pathMatch: "full" },
  { path: "hotel/:id/orders", component: OrderComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
