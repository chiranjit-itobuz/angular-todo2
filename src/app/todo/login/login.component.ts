import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private api:ApiService, private router: Router) { }
  submitted:Boolean = false;
  errorText:string = '';
  loginForm = new FormGroup({
    username: new FormControl ('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  },{updateOn: 'submit'})

  ngOnInit(): void {
  }

  postLoginForm() {
    this.submitted = true;
    if (this.loginForm.valid) {
      // console.log(this.loginForm.value);
      this.api.postLogin(this.loginForm.value).subscribe( data => {
        localStorage.setItem('token', data.sessionToken);
        localStorage.setItem('user', JSON.stringify(this.loginForm.value));
        this.router.navigate(['/todo/list']);
      }, (err) => {
        // console.log('Error message =', err.error.error);
        this.errorText = err.error.error;
      });
    }
  }

  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }

}
