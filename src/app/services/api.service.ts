import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient ) { }

  getItemList(){
    const url = `/todo`;
    // const httpHeaders = new HttpHeaders({
    //   'X-Parse-Application-Id' : `${environment.appId}`,
    //   'X-Parse-REST-API-Key' : `${environment.apiKey}`
    // });
    return this.http.get(url);
  }
}
