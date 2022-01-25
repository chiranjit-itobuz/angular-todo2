import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  editForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    userName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',[Validators.required, Validators.minLength(10), Validators.pattern('[0-9]+$')]),
    website: new FormControl('',[Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
  }
  postEditForm(){
    console.log(this.editForm.value);
  }

  get name(){
    return this.editForm.get('name');
  }
  get userName(){
    return this.editForm.get('userName');
  }
  get email(){
    return this.editForm.get('email');
  }
  get phone(){
    return this.editForm.get('phone');
  }
  get website(){
    return this.editForm.get('website');
  }

}
