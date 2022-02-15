import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
  logedIn:boolean = false;
  ngOnInit(): void {
    if (localStorage.getItem('token')){
      this.logedIn = true;
    }
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['/todo/login']);
  }



}
