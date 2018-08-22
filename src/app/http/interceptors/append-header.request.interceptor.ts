import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppendHeaderRequestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let potentiallyClonedRequest = req;
        let url = req.url;
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        potentiallyClonedRequest = req.clone({
            url: url,
            headers: headers
          });
      
          return next.handle(potentiallyClonedRequest);
    }
}