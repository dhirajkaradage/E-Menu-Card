import { HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HotelService } from "src/app/services/hotel/hotel.service";
import Swal from "sweetalert2";
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: "app-add-update-hotel",
  templateUrl: "./add-update-hotel.component.html",
  styleUrls: ["./add-update-hotel.component.css"],
})
export class AddUpdateHotelComponent implements OnInit {
  addUpdateHotelForm!: FormGroup;
  hotelId: any;
  isEdit: boolean = false;
  constructor(
    private fb: FormBuilder,
    private hotelService: HotelService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.hotelId = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("this is hotel id from listing page ", this.hotelId);
    if (this.hotelId) {
      this.isEdit = true;
    }

    this.addUpdateHotelForm = this.fb.group({
      name: ["", Validators.required],
      type: ["", Validators.required],
      address: this.fb.group({
        shopNumber: [""],
        landmark: [""],
        city: [""],
        district: [""],
        state: [""],
        country: [""],
        pincode: [""],
      }),
      description: [""],
      mobileNumber: ["", [Validators.required, Validators.maxLength(10)]],
    });
  }

  onSubmit() {
    console.log(this.addUpdateHotelForm);
    if (this.addUpdateHotelForm.valid) {
      this.hotelService.createHotel(this.addUpdateHotelForm.value).subscribe({
        next: (res) => {
          console.log("this is res ", res);
          Swal.fire({
            icon: "success",
            title: "Success",
            text: res.message,
            timer: 4000,
          });
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
      this.addUpdateHotelForm.markAllAsTouched();
    }
  }

  updateHotel() {}
}
