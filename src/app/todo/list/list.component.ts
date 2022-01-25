import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private api:ApiService) { 
    this.api.getItemList().subscribe(data =>{
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
