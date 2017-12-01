import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { User } from './user/user.model';

import { UserState } from './user/user.state';

import { UserService } from './user/user.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title: 'Canvera Secure App';
  user: User;
  userSubscription: Subscription;
  constructor(private userState: UserState, private userService: UserService) {
  	this.userSubscription = this.userState.getUser().subscribe(user => {
  		this.user = user;
  		console.log("User set to:", user.email);
  	});
  }
  ngOnInit(): void {
  	this.userService.getUser('canvera.platinum@gmail.com').subscribe(user => {
  		this.userState.setUser(user);
  	});
  }
}
