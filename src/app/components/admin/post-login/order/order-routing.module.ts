import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListingComponent } from './order-listing/order-listing.component';
import { AddUpdateOrderComponent } from './order-listing/add-update-order/add-update-order.component';

const routes: Routes = [
  { path: '', redirectTo: 'listing', pathMatch: 'full' },
  {
    path: 'listing',
    component: OrderListingComponent,
    pathMatch: 'full',
  },
  { path: 'add', component: AddUpdateOrderComponent, pathMatch: 'full' },
  {
    path: 'update/:id',
    component: AddUpdateOrderComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
