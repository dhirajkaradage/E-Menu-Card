import { Component } from "@angular/core";
import { CategoryService } from "src/app/services/category/category.service";

@Component({
  selector: "app-category-listing",
  templateUrl: "./category-listing.component.html",
  styleUrls: ["./category-listing.component.css"],
})
export class CategoryListingComponent {
  categoryList: Array<any> = [];
  constructor(private categoryService: CategoryService) {}
  ngOnInit() {
    this.getCategoryListPagination();
  }

  getCategoryListPagination() {
    this.categoryService.getCategoryList().subscribe({
      next: (res) => {
        console.log("ths is category lsit res ", res);
        this.categoryList = res;
      },
      error: (error) => {
        console.log("this is error ", error);
      },
    });
  }
}
