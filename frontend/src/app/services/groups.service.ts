import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private baseUrl = 'http://localhost:3000/api/groups';

  constructor(private http: HttpClient,
              private authService: AuthenticationService) { }

  public getAllGroups(): Observable<[]> {
    return this.http.get<[]>( this.baseUrl + '/all');
  }

}
