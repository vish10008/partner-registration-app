import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { App } from './app.model';

import { AppState } from './app.state';

@Injectable()
export class AppService {
	constructor(private http: Http) { }
}