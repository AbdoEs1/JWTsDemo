import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { UserModel } from './models/UserModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JWTPresentation';
  currentUser: UserModel;
  constructor(private _loginService:LoginService, private _router:Router){
    this._loginService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this._loginService.logout();
    this._router.navigate(['/Login']);
  }
}
