import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { AddUpdateCategoryComponent } from './category-listing/add-update-category/add-update-category.component';

const routes: Routes = [
  { path: '', redirectTo: 'listing', pathMatch: 'full' },
  {
    path: 'listing',
    component: CategoryListingComponent,
    pathMatch: 'full',
  },
  { path: 'add', component: AddUpdateCategoryComponent, pathMatch: 'full' },
  {
    path: 'edit/:id',
    component: AddUpdateCategoryComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
