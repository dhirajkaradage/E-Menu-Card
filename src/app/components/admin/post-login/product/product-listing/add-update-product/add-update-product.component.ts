import { Component } from "@angular/core";
import {
  FormBuilder,
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
  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group({
      name: [""],
      sellingPrice: [null],
      offerPrice: [null],
      imageLabel: [""],

      hotel: this.fb.group({
        id: [null, Validators.required],
      }),
      category: this.fb.group({
        id: [null, Validators.required],
      }),

      aboutIngredients: this.fb.array([]),
    });
    // {
    //   "name": "Gulab jamun",
    //   "sellingPrice": 40,
    //   "offerPrice": 35,
    //   "imageLabel": "sdfWEFRGRFARGAR",
    //   "hotel": {
    //     "id": 1
    //   },
    //   "category": {
    //     "id": 3
    //   },
    //   "aboutIngredients": [
    //     {
    //       "ingredientName": "khawa(condensd milk)",
    //       "description": "Its made up from fresh milk cow"
    //     },
    //     {
    //       "ingredientName": "Ghee",
    //       "description": "Its made up from fresh milk cow.fat=12.7 kcal,transfat=0 kcal"
    //     },
    //     {
    //       "ingredientName": "Sugar",
    //       "description": "calories = 2.4 kcal"
    //     }
    //   ]
    // }
  }

  returnCommonGroup() {
    return this.fb.group({
      ingredientName: [""],
      description: [""],
    });
  }
  onSubmit() {
    console.log(this.productForm);
  }
}
