import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { UserModel } from 'src/app/models/UserModel';
import { MatTableDataSource } from '@angular/material';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcome: string;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'userName'];
  dataSource = new MatTableDataSource<UserModel>();
  
  constructor(private _userService:UserService) {  }
  
  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this._userService.getAll<UserModel[]>()
      .subscribe( 
        (result) => {
        this.dataSource  = new MatTableDataSource<UserModel>(result.body);
      })  
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  
  

}
