import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { AddUpdateProductComponent } from './product-listing/add-update-product/add-update-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'listing', pathMatch: 'full' },
  {
    path: 'listing',
    component: ProductListingComponent,
    pathMatch: 'full',
  },
  { path: 'add', component: AddUpdateProductComponent, pathMatch: 'full' },
  {
    path: 'edit/:id',
    component: AddUpdateProductComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
