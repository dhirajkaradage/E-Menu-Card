import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryService } from "src/app/services/category/category.service";
import { HotelService } from "src/app/services/hotel/hotel.service";
import { UserService } from "src/app/services/user/user.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  hotelId: any;
  categoryList: Array<any> = [];
  constructor(
    private fb: FormBuilder,
    private hotelService: HotelService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.hotelId = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("this is hotel id from listing page ", this.hotelId);
    if (this.hotelId) {
      this.getCategoryByHotel();
    }
  }

  getCategoryByHotel() {
    this.categoryService.getCategoryByHotelId(this.hotelId).subscribe({
      next: (res) => {
        console.log("this is res ", res);
        if (res) {
          this.categoryList = res;
          this.userService.setCategory(this.categoryList[0].id);
        }
      },
      error: (error) => {
        console.log("this is error ", error);
      },
    });
  }

  setActiveCategory(categoryId: any) {
    console.log("thsi is category id ", categoryId);
    this.userService.setCategory(categoryId);
  }

  goToHome() {
    this.router.navigate([`hotel/${this.hotelId}`]);
  }
  goToCart() {
    this.router.navigate([`hotel/${this.hotelId}/cart`]);
  }
  goToOrders(){
    this.router.navigate([`hotel/${this.hotelId}/orders`]);

  }
}
