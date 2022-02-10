import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  submitted:boolean = false;
  addForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    title: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',[Validators.required, Validators.minLength(10), Validators.pattern('[0-9]+$')]),
    completed: new FormControl('', [Validators.required]),
    data: new FormControl('',[Validators.required]),
  },{updateOn:'submit'})

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  postAddForm(postData:any){
    this.submitted = true;
    if(this.addForm.valid){
      // console.log("Post Value", postData);
     this.api.postTodoItem(postData).subscribe();
     alert("Todo Successfully Added");
    }
  }

  get name(){
    return this.addForm.get('name');
  }
  get title(){
    return this.addForm.get('title');
  }
  get email(){
    return this.addForm.get('email');
  }
  get phone(){
    return this.addForm.get('phone');
  }
  get completed(){
    return this.addForm.get('completed');
  }
  get data () {
    return this.addForm.get('data');
  }

}
