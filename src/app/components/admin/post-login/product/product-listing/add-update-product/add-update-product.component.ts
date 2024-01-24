import { Component } from '@angular/core';
import { FormControl, FormGroup , ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-update-product',
  templateUrl: './add-update-product.component.html',
  styleUrls: ['./add-update-product.component.css']
})
export class AddUpdateProductComponent {
  AddUpdateProductForm!:FormGroup
  ngOnInit(){
    this.AddUpdateProductForm = new FormGroup({
        selectHotel:new FormControl('',Validators.required),
        selectType:new FormControl('',Validators.required),
        productName:new FormControl('',Validators.required),
        price:new FormControl('',Validators.required), 
        discountPrice:new FormControl('',Validators.required),
        about:new FormControl('')

    })
  }
  onSubmit(){
    console.log(this.AddUpdateProductForm);
    
  }
}
