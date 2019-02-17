import { Platform } from '@ionic/angular';
import { Injectable, Injector } from '@angular/core';
import { HttpHeaders, HttpRequest, HttpEvent, HttpHandler, HttpResponse, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor{

  constructor(private authService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`,
        // 'Content-Type': 'application/json'
      }
    });
    return next.handle(request);
  }

}
