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
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.hotelId = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("this is hotel id from listing page ", this.hotelId);
    if (this.hotelId) {
      this.isEdit = true;
      this.getHotelDetailsById();
    }

    this.addUpdateHotelForm = this.fb.group({
      name: ["", Validators.required],
      type: ["", Validators.required],
      description: [""],
      mobileNumber: ["", [Validators.required, Validators.maxLength(10)]],
      address: this.fb.group({
        shopNumber: [""],
        landmark: [""],
        city: [""],
        district: [""],
        state: [""],
        country: [""],
        pincode: ["", Validators.required],
      }),
    });
  }

  get control() {
    return this.addUpdateHotelForm.controls;
  }

  get addressControl() {
    let group = this.addUpdateHotelForm.get("address") as FormGroup;
    return group.controls;
  }

  createHotel() {
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
          this.router.navigate(["/admin/hotel/listing"]);
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

  getHotelDetailsById() {
    this.hotelService.getHotelDetails(this.hotelId).subscribe({
      next: (res) => {
        console.log("this is res get by id", res);
        if (res) {
          this.control["name"].patchValue(res?.name);
          this.control["type"].patchValue(res?.type);
          this.control["description"].patchValue(res?.description);
          this.control["mobileNumber"].patchValue(res?.mobileNumber);

          this.addressControl["shopNumber"].patchValue(
            res?.address?.shopNumber
          );
          this.addressControl["landmark"].patchValue(res?.address?.landmark);
          this.addressControl["city"].patchValue(res?.address?.city);
          this.addressControl["district"].patchValue(res?.address?.district);
          this.addressControl["state"].patchValue(res?.address?.state);
          this.addressControl["country"].patchValue(res?.address?.country);
          this.addressControl["pincode"].patchValue(res?.address?.pincode);
        }
      },
      error: (error) => {
        console.log("this is error ", error);
      },
    });
  }

  updateHotel() {
    if (this.addUpdateHotelForm.valid) {
      this.hotelService
        .updateHotel(this.addUpdateHotelForm.value, this.hotelId)
        .subscribe({
          next: (res) => {
            console.log("this is res ", res);
            Swal.fire({
              icon: "success",
              title: "Success",
              text: res.message,
              timer: 4000,
            });
            this.router.navigate(["/admin/hotel/listing"]);
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

  submit() {
    this.isEdit ? this.updateHotel() : this.createHotel();
  }
}
