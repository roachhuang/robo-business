import { Component, Inject, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MessageService } from '../services/message.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DialogData {
  name: string;
  tel: number;
}
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  signupName: string;
  tel: number;

  constructor(private fb: FormBuilder, private msgService: MessageService, public dialog: MatDialog, private router: Router) { }

  signupForm = this.fb.group({
    name: [''],
    tel: ['', Validators.required],
  });


  onSubmit() {
    // Process checkout data here
    this.newMethod();
    console.warn('Your order has been submitted', this.signupForm.value);
    this.signupName = this.signupForm.value.name;
    console.log(this.signupName);
    this.openDialog();
    // this.items = this.cartService.clearCart();
    // this.checkoutForm.reset();
  }

  private newMethod() {
    this.msgService.sendMessage(this.signupForm.value).subscribe(res => {
      console.log(res);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.signupName, tel: this.tel }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigate(['/home']);
      // this.animal = result;
    });
  }
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
