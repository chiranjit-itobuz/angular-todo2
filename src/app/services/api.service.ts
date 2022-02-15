import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Todo } from '../interface/todo.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient ) { }

  // getTodoItemList(){
  //   return this.http.get('/classes/todo');
  // }

  getTodoItemList(): Observable<Todo>{
    return this.http.get('/classes/todo').pipe(map(
      ((data: any) => {
        return data
      })
    ))
  }

  getTodoItem(id:string ): Observable<Todo> {
    return this.http.get('/classes/todo/'+id).pipe(map(
      ((response: any) => {
        return response;
      })
    ))
  }

  postTodoItem(postData:any){
    return this.http.post('/classes/todo', postData);
  }

  putTodoItem(id:string, putData:any) {
    return this.http.put('/classes/todo/'+id, putData)
  }

  deleteTodoItem(id:string){
    return this.http.delete('/classes/todo/'+id);
  }

  postSignUp(postData:any){
    return this.http.post('/users', postData).pipe(map(
      ((response: any) => {
        return response;
      })
    ))
  }

  postLogin(postData:any) {
    return this.http.post('/login', postData).pipe(map(
      ((response: any) => {
        return response;
      })
    ))
  }
  
}
