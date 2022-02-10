import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  viewTodoItem:any;
  constructor(private api:ApiService, private router:ActivatedRoute) {
  }

  ngOnInit(): void {
    // console.log("Params Data", this.router.snapshot.params['id']);
    const id = this.router.snapshot.params['id'];
    this.api.getTodoItem(id).subscribe(data =>{
      // console.log("Single Data", data);
      this.viewTodoItem = data;
    })
  }

}
