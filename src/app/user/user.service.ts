import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { User } from './user.model';

const USER: User = { guid: '63a35e13-de15-4e32-8e19-8171fe1206b1', email: 'canvera.platinum@gmail.com', name: 'Canvera Test User'}

class GetUserService {
    private endPoint: string = 'http://localhost:8080/customers/';
    constructor(private http: Http) { }
    execute(guid: string): Observable<User> {
        return this.http.get(this.endPoint + guid).map(this.onSuccess).catch(this.onFailure);
    }
    onSuccess(response: Response): User {
		let json = response.json();
		let user = new User();
		user.guid = json.customerGUID;
		user.email = json.billingAddress.email;
		user.name = json.billingAddress.firstName;
		return user;
    }
    onFailure(response: Response) {
        return Observable.throw(response);
    }
}


@Injectable()
export class UserService {
	private getUserService: GetUserService;
	constructor(private http: Http) {
		this.getUserService = new GetUserService(http);
	}
	getUser(guid: string): Observable<User> {
		return this.getUserService.execute(guid);
	}
}