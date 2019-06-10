import { Component, OnInit, } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  username: string;
  user: any;
  repos: any;

  constructor(public usersService: DataService) {
   
  }
  userName() {
    this.usersService.getuserInfo().subscribe(user => {
      console.log(user);
      this.user = user;
    });
  }
  ngOnInit() {

  }

}
