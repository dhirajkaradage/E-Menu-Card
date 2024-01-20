import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HotelListingComponent } from './hotel-listing/hotel-listing.component';
import { AddUpdateHotelComponent } from './hotel-listing/add-update-hotel/add-update-hotel.component';

@NgModule({
  declarations: [HotelListingComponent, AddUpdateHotelComponent],
  imports: [CommonModule, HotelRoutingModule],
})
export class HotelModule {}
