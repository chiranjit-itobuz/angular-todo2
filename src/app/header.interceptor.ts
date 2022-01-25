import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(`${environment.serverURL}/classes` + request.url);
    const req = request.clone ({
      setHeaders: {
        'X-Parse-Application-Id' : `${environment.appId}`,
        'X-Parse-REST-API-Key' : `${environment.apiKey}`,
        'baseUrl' : `${environment.serverURL}/classes`
      },
    })
    
    return next.handle(req);
  }
}
