import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from './user.model';

const EMPTY_USER = { guid: '', email: '', name: '' }

@Injectable()
export class UserState {
  private user: BehaviorSubject<User> = new BehaviorSubject(EMPTY_USER);
  public getUser(): Observable<User> {
    return this.user.asObservable();
  }
  public setUser(user: User): void {
    this.user.next(user);
  }
}