import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class TodoInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      setHeaders: {
        'X-Parse-Application-Id' : `${environment.appId}`,
        'X-Parse-Rest-Api-Key' : `${environment.apiKey}`
      },
      url: `${environment.serverURL}${request.url}`
    })
    return next.handle(req);
  }
}
