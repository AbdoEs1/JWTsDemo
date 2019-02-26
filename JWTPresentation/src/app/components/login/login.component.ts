import { Component, OnInit, Output } from '@angular/core';
import { LoginModel } from 'src/app/models/LoginModel';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:LoginModel;
  constructor(private _loginService:LoginService, private _router: Router) {
    this.login = new LoginModel();
  }

  ngOnInit() {
    // localStorage.clear();
  }

  onSubmit(){
    console.log(this.login.UserName);
    this._loginService.loginToken(this.login).subscribe(
      response=> {
        
        if (!isNullOrUndefined(response.token)) 
        {
          this._router.navigate(['Home']);
        }
        else{
          this._router.navigate(["Register"]);
        }
        console.log(response.token);
    });
 
  }
  

}
