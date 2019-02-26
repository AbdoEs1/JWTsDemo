import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { LoginModel } from '../models/LoginModel';
import { tap, catchError } from 'rxjs/operators'
import { throwError, Observable, BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/UserModel';


@Injectable()
export class LoginService {

  apiUrl ="http://localhost:5000/api/Token/CreateToken";

  private currentUserSubject: BehaviorSubject<UserModel>;
  public currentUser: Observable<UserModel>;

  constructor(private _http:HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    
  }

  public get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }

  loginToken(_loginmodel : LoginModel){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post<any>(this.apiUrl, _loginmodel, { headers: headers }).pipe(
      tap( data => 
        {
          if (data && data.token != null) 
          {
            localStorage.setItem('currentUser', JSON.stringify({ username: _loginmodel.UserName, token: data.token }));
            
            this.currentUserSubject.next(data);
            return data;
          }
          else
          {
            return null;
          }
        }
      ));
      
  }
  
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}

