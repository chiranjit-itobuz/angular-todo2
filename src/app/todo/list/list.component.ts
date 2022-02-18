import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  getTodoData:any;
  errorMessage:any;
  constructor(private api:ApiService) { 
    
  }


  ngOnInit(): void {
    this.api.getTodoItemList().subscribe(data =>{
      this.getTodoData = data.results;
      console.log("Test", data.results);
    },
    (err) => {
      // console.log('list', err.error.message);
      this.errorMessage = err.error.message;
    }
    )
  }

  deleteItem(index:number, id:string) {
    this.api.deleteTodoItem(id).subscribe();
    this.getTodoData.splice(index, 1);
  }

}
