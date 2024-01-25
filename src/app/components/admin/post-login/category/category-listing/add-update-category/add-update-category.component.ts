import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { CategoryService } from "src/app/services/category/category.service";
import { HotelService } from "src/app/services/hotel/hotel.service";

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
    private hotelService: HotelService
  ) {}
  ngOnInit() {
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

  createCategory() {
    if (this.addUpdateCategoryForm.valid) {
      this.categoryService
        .createCategory(this.addUpdateCategoryForm.value)
        .subscribe({
          next: (res) => {
            console.log("thsi is res ", res);
          },
          error: (error) => {
            console.log("this is error ", error);
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
          },
          error: (error) => {
            console.log("this is error ", error);
          },
        });
    } else {
      this.addUpdateCategoryForm.markAllAsTouched();
    }
  }
}
