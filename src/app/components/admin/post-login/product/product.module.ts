import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductListingComponent } from "./product-listing/product-listing.component";
import { AddUpdateProductComponent } from "./product-listing/add-update-product/add-update-product.component";
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ProductListingComponent, AddUpdateProductComponent],
  imports: [CommonModule, ProductRoutingModule,ReactiveFormsModule],
})
export class ProductModule {}
