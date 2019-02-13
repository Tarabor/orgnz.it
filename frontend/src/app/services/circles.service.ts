import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CirclesService {

  private baseUrl = 'http://localhost:3000/api/circles';

  constructor(private http: HttpClient,
              private authService: AuthenticationService) { }

  public getAllCircles(): Observable<[]> {
    return this.http.get<[]>( this.baseUrl + '/all', {headers: this.authService.getAPIHeader()});
  }

}
