import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private api:ApiService) { }
  submitted:Boolean = false;
  passwordResetForm = new FormGroup ({
    email: new FormControl ('', [Validators.required, Validators.email])
  }, {updateOn: 'submit'})

  ngOnInit(): void {
  }

  postResetLink() {
    this.submitted = true;
    if (this.passwordResetForm.valid) {
      this.api.postResetPassword(this.passwordResetForm.value).subscribe(()=> {
        console.log('Form Value', this.passwordResetForm.value);
      })
    }
  }

  get email() {
    return this.passwordResetForm.get('email');
  }

}
