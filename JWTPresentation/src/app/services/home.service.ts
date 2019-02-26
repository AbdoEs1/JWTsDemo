import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl ="http://localhost:5000/api/User";

  data: any;
  token: any;
  username: any;

  constructor(private _http : HttpClient) { 
    this.data = JSON.parse(localStorage.getItem('currentUser'));
    this.token = this.data.token;
    this.username = this.data.username;
  }
  
  getAll<T>(){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this._http.get<T>(this.apiUrl, { headers: headers, observe: 'response' })
    .pipe( tap(data => data));
  }
}
