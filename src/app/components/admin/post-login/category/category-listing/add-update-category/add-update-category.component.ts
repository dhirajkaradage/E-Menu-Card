import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-add-update-category",
  templateUrl: "./add-update-category.component.html",
  styleUrls: ["./add-update-category.component.css"],
})
export class AddUpdateCategoryComponent {
  addUpdateCategoryForm!: FormGroup;

  ngOnInit() {
    this.addUpdateCategoryForm = new FormGroup({
      selectHotel: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    console.log(this.addUpdateCategoryForm);
  }
}
