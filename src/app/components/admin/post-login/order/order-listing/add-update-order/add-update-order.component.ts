import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormControlName,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { OrderService } from "src/app/services/order/order.service";

@Component({
  selector: "app-add-update-order",
  templateUrl: "./add-update-order.component.html",
  styleUrls: ["./add-update-order.component.css"],
})
export class AddUpdateOrderComponent {
  orderForm!: FormGroup;
  isEdit: boolean = false;
  orderId: any;
  constructor(private fb: FormBuilder, private orderService: OrderService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.orderForm = this.fb.group({
      discount: [null, Validators.required],
      customerName: ["", Validators.required],
      customerMobileName: ["", Validators.required],
      totalAmount: [null, Validators.required],
      productList: this.fb.array([]),
    });
  }

  submit() {
    this.isEdit ? this.updateOrder() : this.createOrder();
  }

  createOrder() {
    if (this.orderForm.valid) {
      this.orderService.createOrder(this.orderForm.value).subscribe({
        next: (res) => {
          console.log("thsi is order create res ", res);
        },
        error: (error) => {
          console.log("thsi is error ", error);
        },
      });
    } else {
      this.orderForm.markAllAsTouched();
    }
  }

  updateOrder() {
    if (this.orderForm.valid) {
      this.orderService
        .updateOrder(this.orderForm.value, this.orderId)
        .subscribe({
          next: (res) => {
            console.log("thsi is order udpate res ", res);
          },
          error: (error) => {
            console.log("thsi is error ", error);
          },
        });
    } else {
      this.orderForm.markAllAsTouched();
    }
  }

  getOrderDetails() {
    this.orderService.getOrderById(this.orderId).subscribe({
      next: (res) => {
        console.log("thsi is order get res ", res);
      },
      error: (error) => {
        console.log("thsi is error ", error);
      },
    });
  }
}
