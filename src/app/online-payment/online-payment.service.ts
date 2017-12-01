import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { TowardsOption, Incentive, BalanceDetails, OrderDetails } from './online-payment.model';

import { PATHS, TOWARDS_OPTIONS, BALANCE_DETAILS, ORDER_DETAILS } from './online-payment.constants';

class GetTowardsOptionsService {
    private endPoint: string = 'http://localhost:8080/paymentweb/payoption';
    constructor(private http: Http) { }
    execute(): Observable<TowardsOption[]> {
        return this.http.get(this.endPoint).map(this.onSuccess).catch(this.onFailure);
    }
    onSuccess(response: Response): TowardsOption[] {
        let towardsOptions: TowardsOption[] = response.json();
        for(let option of towardsOptions) {
            option.path = PATHS[option.name];
        }
        return TOWARDS_OPTIONS;
    }
    onFailure(response: Response) {
        return Observable.throw(response);
    }
}

class GetBalanceDetailsService {
    private endPoint: string = 'http://localhost:8080/paymentweb/payoption';
    constructor(private http: Http) { }
    execute(): Observable<BalanceDetails> {
        return Observable.of(BALANCE_DETAILS);
    }
}

class GetOrderDetailsService {
    private endPoint: string = 'http://localhost:8080/paymentweb/payoption';
    constructor(private http: Http) { }
    execute(): Observable<OrderDetails[]> {
        return Observable.of(ORDER_DETAILS);
    }    
}

@Injectable()
export class OnlinePaymentService {
    private getTowardsOptionsService: GetTowardsOptionsService;
    private getBalanceDetailsService: GetBalanceDetailsService;
    private getOrderDetailsService: GetOrderDetailsService;
    constructor(http: Http) {
        this.getTowardsOptionsService = new GetTowardsOptionsService(http);
        this.getBalanceDetailsService = new GetBalanceDetailsService(http);
        this.getOrderDetailsService = new GetOrderDetailsService(http);
    }
    getTowardsOptions(): Observable<TowardsOption[]> {
        return this.getTowardsOptionsService.execute();
    }
    getBalanceDetails(): Observable<BalanceDetails> {
        return this.getBalanceDetailsService.execute();
    }
    getOrderDetails(): Observable<OrderDetails[]> {
        return this.getOrderDetailsService.execute();
    }
}