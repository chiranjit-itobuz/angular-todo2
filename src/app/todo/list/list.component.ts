import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  getTodoData:any;
  constructor(private api:ApiService) { 
    
  }


  ngOnInit(): void {
    this.api.getTodoItemList().subscribe(data =>{
      this.getTodoData = data.results;
      console.log("Test", data.results);
    },
    err => console.log(err),
    // ()=>console.log("Ready Todo")
    )
  }

  deleteItem(id:string) {
    this.api.deleteTodoItem(id).subscribe(()=> {
      console.log('Current Id =>', id);
      this.ngOnInit();
    });
    
  }

}
