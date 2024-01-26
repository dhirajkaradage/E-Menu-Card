import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent {
  orderForm!: FormGroup;
  isCartEmpty: boolean = true
  productList: Array<any> = []
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.createForm();

    let localStorateCart = localStorage.getItem("productsArray");
    console.log("local ", localStorateCart);
    if (localStorateCart) {
      let data: Array<any> = JSON.parse(localStorateCart);
      console.log("this is data ", data);
      if (data.length > 0) {
        this.productList = data
        for (let index = 0; index < data.length; index++) {
          const product = data[index];
          console.log("local storate product ", product);
          this.productListArr.push(this.returnCommonGroup(product));
        }
      }
      this.isCartEmpty = false
    } else {
      this.isCartEmpty = true
    }
  }

  get productListArr() {
    return this.orderForm.get("productList") as FormArray;
  }

  createForm() {
    this.orderForm = this.fb.group({
      discount: [null],
      customerName: [""],
      customerMobileName: [""],
      totalAmount: [null],
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
}
