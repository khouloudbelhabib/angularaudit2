import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../Model/User';
import {UserServiceService} from '../../Service/user-service.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  private User;
  Users: Observable<User[]>;

  constructor(private UserService: UserServiceService ) { }

  ngOnInit(): void {
    this.getAllUser();
  }
// tslint:disable-next-line:typedef
getAllUser(){
    this.Users = this.UserService.getAllUser();
}
}
