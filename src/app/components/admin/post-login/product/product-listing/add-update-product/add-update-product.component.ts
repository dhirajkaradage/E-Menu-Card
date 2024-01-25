import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ProductService } from "src/app/services/product/product.service";

@Component({
  selector: "app-add-update-product",
  templateUrl: "./add-update-product.component.html",
  styleUrls: ["./add-update-product.component.css"],
})
export class AddUpdateProductComponent {
  productForm!: FormGroup;
  constructor(private productService: ProductService) {}
  ngOnInit() {}

  createForm() {
    this.productForm = new FormGroup({
      selectHotel: new FormControl("", Validators.required),
      selectType: new FormControl("", Validators.required),
      productName: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      discountPrice: new FormControl("", Validators.required),
      about: new FormControl(""),
    });
  }
  onSubmit() {
    console.log(this.productForm);
  }
}
