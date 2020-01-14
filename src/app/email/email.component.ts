import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-cart',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  constructor(private fb: FormBuilder, private msgService: MessageService) { }
  signupForm = this.fb.group({
    name: [''],
    tel: ['', Validators.required],
  });


  onSubmit() {
    // Process checkout data here
    this.newMethod();
    console.warn('Your order has been submitted', this.signupForm.value);

    // this.items = this.cartService.clearCart();
    // this.checkoutForm.reset();
  }

  private newMethod() {
    this.msgService.sendMessage(this.signupForm.value).subscribe(res => {
      console.log(res);
    });
  }
}
