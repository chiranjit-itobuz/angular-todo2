import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Todo } from '../interface/todo.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient ) { }

  // For list items
  getTodoItemList(): Observable<Todo>{
    return this.http.get('/classes/todo').pipe(map(
      ((data: any) => {
        return data
      })
    ))
  }

  // For single list item
  getTodoItem(id:string ): Observable<Todo> {
    return this.http.get('/classes/todo/'+id).pipe(map(
      ((response: any) => {
        return response;
      })
    ))
  }

  // For create todo item
  postTodoItem(postData:any){
    return this.http.post('/classes/todo', postData);
  }

  // For edit todo item
  putTodoItem(id:string, putData:any) {
    return this.http.put('/classes/todo/'+id, putData)
  }

  // For delete todo item
  deleteTodoItem(id:string){
    return this.http.delete('/classes/todo/'+id);
  }

  // For register todo user
  postSignUp(postData:any): Observable<Todo>{
    return this.http.post('/users', postData).pipe(map(
      ((response: any) => {
        return response;
      })
    ))
  }

  // For login todo user
  postLogin(postData:any): Observable<Todo> {
    return this.http.post('/login', postData).pipe(map(
      ((response: any) => {
        return response;
      })
    ))
  }

  // For reset password link
  postResetPassword(postData:string) {
    return this.http.post('/requestPasswordReset', postData);
  }
  
}
