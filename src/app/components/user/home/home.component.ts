import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryService } from "src/app/services/category/category.service";
import { HotelService } from "src/app/services/hotel/hotel.service";
import { UserService } from "src/app/services/user/user.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  hotelId: any;
  productList: Array<any> = [];
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
    }

    this.userService.activeCategory.subscribe((res) => {
      console.log("this is res category id ", res);
      if (res) {
        this.categoryService.getProductsByCategoryId(res).subscribe({
          next: (res) => {
            if (res) {
              console.log("products by category ", res);
              this.productList = res;
            }
          },
          error: (error) => {
            console.log("this is error ", error);
          },
        });
      }
    });
  }

  addToCart(product: any) {
    let localStorateCart = localStorage.getItem("productsArray");
    console.log("local ", localStorateCart);
    if (localStorateCart) {
      let data: Array<any> = JSON.parse(localStorateCart);
      console.log("old data ", data);
      data.push(product);
      localStorage.setItem("productsArray", JSON.stringify(data));
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Product Added In The Cart Successfully",
        timer: 1000,
      });
    } else {
      let productsArray = [];
      productsArray.push(product);
      localStorage.setItem("productsArray", JSON.stringify(productsArray));
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Product Added In The Cart Successfully",
        timer: 1000,
      });
    }
  }
}
