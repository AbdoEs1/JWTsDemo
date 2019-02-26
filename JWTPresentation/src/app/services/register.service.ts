import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { UserModel } from '../models/UserModel'
import { tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiUrl ="http://localhost:5000/api/Token/Register";

  constructor(private _http:HttpClient) { 
    
  }

  register(_userModel : UserModel){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post<any>(this.apiUrl, _userModel, { headers: headers }).pipe();
  }

}
