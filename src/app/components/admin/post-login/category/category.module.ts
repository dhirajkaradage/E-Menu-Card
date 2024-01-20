import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CategoryRoutingModule } from "./category-routing.module";
import { CategoryListingComponent } from "./category-listing/category-listing.component";
import { AddUpdateCategoryComponent } from "./category-listing/add-update-category/add-update-category.component";

@NgModule({
  declarations: [CategoryListingComponent, AddUpdateCategoryComponent],
  imports: [CommonModule, CategoryRoutingModule],
})
export class CategoryModule {}
