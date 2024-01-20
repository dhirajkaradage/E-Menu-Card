import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { AddUpdateOrderComponent } from './order-listing/add-update-order/add-update-order.component';


@NgModule({
  declarations: [
    AddUpdateOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
