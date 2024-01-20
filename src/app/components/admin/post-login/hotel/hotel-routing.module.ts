import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListingComponent } from './hotel-listing/hotel-listing.component';
import { AddUpdateHotelComponent } from './hotel-listing/add-update-hotel/add-update-hotel.component';

const routes: Routes = [
  { path: '', redirectTo: 'listing', pathMatch: 'full' },
  {
    path: 'listing',
    component: HotelListingComponent,
    pathMatch: 'full',
  },
  { path: 'add', component: AddUpdateHotelComponent, pathMatch: 'full' },
  {
    path: 'update/:id',
    component: AddUpdateHotelComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelRoutingModule {}
