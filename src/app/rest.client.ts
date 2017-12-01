import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class RestClient {
	constructor(private http: Http) { }
	get(endPoint, responseHandler, errorHandler) {
		return this.http.get(endPoint).map(responseHandler).catch(errorHandler);
	}
}