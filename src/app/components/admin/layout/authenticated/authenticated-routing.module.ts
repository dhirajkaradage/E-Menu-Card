import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hotel',
    loadChildren: () =>
      import('./../../post-login/hotel/hotel.module').then(
        (m) => m.HotelModule
      ),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./../../post-login/category/category.module').then(
        (m) => m.CategoryModule
      ),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./../../post-login/product/product.module').then(
        (m) => m.ProductModule
      ),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./../../post-login/order/order.module').then(
        (m) => m.OrderModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticatedRoutingModule {}
