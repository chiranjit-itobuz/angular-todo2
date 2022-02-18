import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  submitted:boolean = false;
  errorMessage:string = '';
  successMessage:string = '';
  showMessage:boolean = false;
  editForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    title: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',[Validators.required, Validators.minLength(10), Validators.pattern('[0-9]+$')]),
    completed: new FormControl('', [Validators.required]),
    data: new FormControl('',[Validators.required]),
  },{updateOn:'submit'})


  constructor(private api:ApiService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    // console.log("Params Data", this.router.snapshot.params['id']);
    const id = this.router.snapshot.params['id'];
    this.api.getTodoItem(id).subscribe(data =>{
      // console.log("Single Data", data);
      this.editForm.patchValue({
        name: data.name,
        title: data.title,
        email: data.email,
        phone: data.phone,
        completed: data.completed,
        data: data.data
      });
      // this.errorMessage = "API works fine";
    }, 
    (err) => {
      // console.log('get edit', err.error.message);
      this.errorMessage = err.error.message;
    })
  }


  postEditForm(){
    this.submitted = true;
    const id = this.router.snapshot.params['id'];
    if(this.editForm.valid) {
      // console.log(this.editForm.value);
      this.api.putTodoItem(id, this.editForm.value).subscribe( data => {
        // console.log(data);
        this.successMessage = 'Todo updated successfully';
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 3000);
      }, 
      (err)=> {
        // console.log('Update', err.error.message);
        this.errorMessage = err.error.message;
      });
    }
  }

  get name(){
    return this.editForm.get('name');
  }
  get title(){
    return this.editForm.get('title');
  }
  get email(){
    return this.editForm.get('email');
  }
  get phone(){
    return this.editForm.get('phone');
  }
  get completed(){
    return this.editForm.get('completed');
  }
  get data(){
    return this.editForm.get('data');
  }

}
