import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryService } from "src/app/services/category/category.service";
import { HotelService } from "src/app/services/hotel/hotel.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-add-update-category",
  templateUrl: "./add-update-category.component.html",
  styleUrls: ["./add-update-category.component.css"],
})
export class AddUpdateCategoryComponent {
  addUpdateCategoryForm!: FormGroup;
  isEdit: boolean = false;
  hotelList: Array<any> = [];
  categoryId: any;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private hotelService: HotelService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.categoryId = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("this is id from listing page ", this.categoryId);
    if (this.categoryId) {
      this.isEdit = true;
      this.getCategoryById();
    }
    this.getHotelList();
    this.createForm();
  }

  createForm() {
    this.addUpdateCategoryForm = this.fb.group({
      name: ["", Validators.required],
      hotel: this.fb.group({
        id: [null, Validators.required],
      }),
    });
  }

  get control() {
    return this.addUpdateCategoryForm.controls;
  }

  get hotelControl() {
    let group = this.addUpdateCategoryForm.get("hotel") as FormGroup;
    return group.controls;
  }

  getHotelList() {
    this.hotelService.getHotelList().subscribe({
      next: (res) => {
        console.log("this is hotel list in categoyr ", res);
        this.hotelList = res;
      },
      error: (error) => {
        console.log("this is error ", error);
      },
    });
  }

  getCategoryById() {
    this.categoryService.getCategoryById(this.categoryId).subscribe({
      next: (res) => {
        if (res) {
          console.log("res ", res);
          this.control["name"].patchValue(res.name);
          this.hotelControl["id"].patchValue(res.hotel.id);
        }
      },
      error: (error) => {},
    });
  }

  createCategory() {
    if (this.addUpdateCategoryForm.valid) {
      this.categoryService
        .createCategory(this.addUpdateCategoryForm.value)
        .subscribe({
          next: (res) => {
            console.log("thsi is res ", res);
            Swal.fire({
              icon: "success",
              title: "Success",
              text: res.message,
              timer: 4000,
            });
            this.router.navigate(["/admin/category/listing"]);
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
      this.addUpdateCategoryForm.markAllAsTouched();
    }
  }

  updateCategoryById() {
    if (this.addUpdateCategoryForm.valid) {
      this.categoryService
        .updateCategory(this.addUpdateCategoryForm.value, this.categoryId)
        .subscribe({
          next: (res) => {
            console.log("thsi is res ", res);
            Swal.fire({
              icon: "success",
              title: "Success",
              text: res.message,
              timer: 4000,
            });
            this.router.navigate(["/admin/category/listing"]);
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
      this.addUpdateCategoryForm.markAllAsTouched();
    }
  }

  submit() {
    this.isEdit ? this.updateCategoryById() : this.createCategory();
  }
}
