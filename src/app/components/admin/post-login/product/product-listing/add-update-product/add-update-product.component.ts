import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryService } from "src/app/services/category/category.service";
import { HotelService } from "src/app/services/hotel/hotel.service";
import { ProductService } from "src/app/services/product/product.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-add-update-product",
  templateUrl: "./add-update-product.component.html",
  styleUrls: ["./add-update-product.component.css"],
})
export class AddUpdateProductComponent {
  productForm!: FormGroup;
  hotelList: Array<any> = [];
  categoryList: Array<any> = [];
  isEdit: boolean = false;
  productId: any;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private hotelService: HotelService,
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("this is id from listing page ", this.productId);
    if (this.productId) {
      this.isEdit = true;
      this.getProductById();
    }
    this.getHotelList();
    this.createForm();
  }

  get control() {
    return this.productForm.controls;
  }

  get hotelControl() {
    let group = this.productForm.get("hotel") as FormGroup;
    return group.controls;
  }

  get categoryControl() {
    let group = this.productForm.get("category") as FormGroup;
    return group.controls;
  }

  getProductById() {
    this.productService.getProductById(this.productId).subscribe({
      next: (res) => {
        console.log("this is res ", res);
        if (res) {
          this.control["name"].patchValue(res.name);
          this.control["sellingPrice"].patchValue(res.sellingPrice);
          this.control["offerPrice"].patchValue(res.offerPrice);
          this.control["imageLabel"].patchValue(res.imageLabel);

          this.hotelControl['id'].patchValue(res.hotel.id)
          this.getCategoryByHotel()
          this.categoryControl['id'].patchValue(res.category.id)
        }
      },
      error: (error) => {
        console.log("this is error ", error);
      },
    });
  }

  createForm() {
    this.productForm = this.fb.group({
      name: ["", Validators.required],
      sellingPrice: [null, Validators.required],
      offerPrice: [null],
      imageLabel: ["", Validators.required],

      hotel: this.fb.group({
        id: [null, Validators.required],
      }),
      category: this.fb.group({
        id: [null, Validators.required],
      }),

      aboutIngredients: this.fb.array([]),
    });
  }

  getHotelList() {
    this.hotelService.getHotelList().subscribe({
      next: (res) => {
        console.log("thsi is res hotel list", res);
        this.hotelList = res;
      },
      error: (error) => {
        console.log("this is error ", error);
      },
    });
  }

  getCategoryByHotel() {
    const hotelId = this.hotelControl["id"].value;
    this.categoryList = [];
    this.categoryService.getCategoryByHotelId(hotelId).subscribe({
      next: (res) => {
        console.log("this is res ", res);
        this.categoryList = res;
      },
      error: (error) => {
        console.log("thsi is error ", error);
      },
    });
  }

  returnCommonGroup() {
    return this.fb.group({
      ingredientName: [""],
      description: [""],
    });
  }

  onFileSelect(event: any) {
    console.log("event ", event.target.files[0].name);
    this.control["imageLabel"].patchValue(event.target.files[0].name);
  }

  submit() {
    this.isEdit ? this.updateProduct() : this.createProduct();
  }

  createProduct() {
    if (this.productForm.valid) {
      this.productService.createProduct(this.productForm.value).subscribe({
        next: (res) => {
          console.log("thsi is res ", res);
          Swal.fire({
            icon: "success",
            title: "Success",
            text: res.message,
            timer: 4000,
          });
          this.router.navigate(["/admin/product/listing"]);
        },
        error: (error) => {
          console.log("this is error ", error);
          if (error.status == 412) {
            Swal.fire({
              icon: "error",
              title: "Invalid",
              text: error.error.errorMessage,
              timer: 4000,
            });
          }
        },
      });
    } else {
      this.productForm.markAllAsTouched();
    }
  }
  updateProduct() {
    if (this.productForm.valid) {
      this.productService
        .updateProduct(this.productForm.value, this.productId)
        .subscribe({
          next: (res) => {
            console.log("thsi is res ", res);
            Swal.fire({
              icon: "success",
              title: "Success",
              text: res.message,
              timer: 4000,
            });
            this.router.navigate(["/admin/product/listing"]);
          },
          error: (error) => {
            console.log("this is error ", error);
            if (error.status == 412) {
              Swal.fire({
                icon: "error",
                title: "Invalid",
                text: error.error.errorMessage,
                timer: 4000,
              });
            }
          },
        });
    } else {
      this.productForm.markAllAsTouched();
    }
  }
}
