import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OrderService } from "src/app/services/order/order.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent {
  orderForm!: FormGroup;
  isCartEmpty: boolean = true;
  productList: Array<any> = [];
  total: number = 0;
  constructor(private fb: FormBuilder, private orderService: OrderService) {}
  ngOnInit() {
    this.createForm();

    let localStorateCart = localStorage.getItem("productsArray");
    console.log("local ", localStorateCart);
    if (localStorateCart) {
      let data: Array<any> = JSON.parse(localStorateCart);
      console.log("this is data ", data);
      if (data.length > 0) {
        this.productList = data;
        for (let index = 0; index < data.length; index++) {
          const product = data[index];
          console.log("local storate product ", product);
          this.total += parseInt(product.sellingPrice);
          this.control["totalAmount"].patchValue(this.total);
          this.productListArr.push(this.returnCommonGroup(product));
        }
      }
      this.isCartEmpty = false;
    } else {
      this.isCartEmpty = true;
    }
  }

  get control() {
    return this.orderForm.controls;
  }

  get productListArr() {
    return this.orderForm.get("productList") as FormArray;
  }

  createForm() {
    this.orderForm = this.fb.group({
      discount: [null],
      customerName: ["", Validators.required],
      customerMobileName: ["", Validators.required],
      totalAmount: [null, Validators.required],
      productList: this.fb.array([]),
    });
  }

  returnCommonGroup(product: any) {
    return this.fb.group({
      id: product.id,
      name: product.name,
      imageLabel: product.imageLabel,
      sellingPrice: product.sellingPrice,
    });
  }

  removeProductFromCart(index: number) {
    this.productListArr.removeAt(index);
    this.productList.splice(index, 1);
    localStorage.setItem("productsArray", JSON.stringify(this.productList));
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = 0;
    if (this.productList.length > 0) {
      for (let index = 0; index < this.productList.length; index++) {
        const product = this.productList[index];

        this.total += parseInt(product.sellingPrice);
        this.control["totalAmount"].patchValue(this.total);
      }
    }
  }

  placeOrder() {
    this.orderService.createOrder(this.orderForm.value).subscribe({
      next: (res) => {
        console.log("thsi is res ", res);
      },
      error: (error) => {
        console.log("thsi is error ", error);
      },
    });
  }
}
