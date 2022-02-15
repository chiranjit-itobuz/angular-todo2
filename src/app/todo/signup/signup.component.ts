import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private api:ApiService) { }
  submitted:boolean = false;
  errorText:any;
  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)])
  },{updateOn: 'submit'})

  ngOnInit(): void {
  }

  postSignupForm() {
    this.submitted = true;
    if (this.signupForm.valid) {
      this.api.postSignUp(this.signupForm.value).subscribe( data => {
        console.log('Token', data);
        localStorage.setItem('token', data.sessionToken);
        localStorage.setItem('user', JSON.stringify(this.signupForm.value));
      }, 
      (err)=>{
        console.log('message', err);
        this.errorText = err.error;
      });
    }
  }

  get email(){
    return this.signupForm.get('email');
  } 
  get username(){
    return this.signupForm.get('username');
  } 
  get password(){
    return this.signupForm.get('password');
  } 

}
