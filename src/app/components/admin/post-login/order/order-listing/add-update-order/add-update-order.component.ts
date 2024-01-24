import { Component } from '@angular/core';
import { FormGroup , FormControl, FormControlName, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-update-order',
  templateUrl: './add-update-order.component.html',
  styleUrls: ['./add-update-order.component.css']
})
export class AddUpdateOrderComponent {
  addUpdateOrderForm!: FormGroup

  ngOnInit(){
    this.addUpdateOrderForm = new FormGroup({
      name: new FormControl('',Validators.required),
      type:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      about:new FormControl('')
    });
  }

  onSubmit(){
    console.log(this.addUpdateOrderForm);
    
  }

  

  
}
