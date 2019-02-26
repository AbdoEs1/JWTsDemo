import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service'
import { UserModel } from 'src/app/models/userModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: UserModel;

  constructor(private _registerService:RegisterService) { 
    this.user = new UserModel();
  }

  ngOnInit() {
    //this._registerService.register(this.user);// 
  }

  onSubmit(){
    console.log(this.user.UserName);
    this._registerService.register(this.user).subscribe((data)=> {
      console.log(data.token);
    });

  }

}
