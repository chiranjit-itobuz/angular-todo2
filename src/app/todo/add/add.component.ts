import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    userName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',[Validators.required, Validators.minLength(10), Validators.pattern('[0-9]+$')]),
    website: new FormControl('',[Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  postAddForm(){
    console.log(this.addForm.value);
  }

  get name(){
    return this.addForm.get('name');
  }
  get userName(){
    return this.addForm.get('userName');
  }
  get email(){
    return this.addForm.get('email');
  }
  get phone(){
    return this.addForm.get('phone');
  }
  get website(){
    return this.addForm.get('website');
  }

}
