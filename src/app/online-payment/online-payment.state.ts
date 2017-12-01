import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { TowardsOption, Incentive, BalanceDetails, OrderDetails } from './online-payment.model';

const EMPTY_TOWARDS_OPTION = { name: '', title: '', selected: false, path: '' }
const EMPTY_BALANCE_DETAILS = { totalIncentiveBalanceAmount: 0, totalCreditBalanceAmount: 0, incentives: [] }

@Injectable()
export class OnlinePaymentState {
	private title: BehaviorSubject<string> = new BehaviorSubject("");
	private towardsOptions: BehaviorSubject<TowardsOption[]> = new BehaviorSubject([]);
	private selectedTowardsOption: BehaviorSubject<TowardsOption> = new BehaviorSubject(EMPTY_TOWARDS_OPTION);
	private balanceDetails: BehaviorSubject<BalanceDetails> = new BehaviorSubject(EMPTY_BALANCE_DETAILS);
	private orderDetails: BehaviorSubject<OrderDetails[]> = new BehaviorSubject([]);
	public getTitle(): Observable<string> {
		return this.title.asObservable();
	}
	public setTitle(title: string): void {
		this.title.next(title);
	}
	public getTowardsOptions(): Observable<TowardsOption[]> {
		return this.towardsOptions.asObservable();
	}
	public setTowardsOptions(towardsOptions: TowardsOption[]): void {
		this.towardsOptions.next(towardsOptions);
	}
	public getSelectedTowardsOption(): Observable<TowardsOption> {
		return this.selectedTowardsOption.asObservable();
	}
	public setSelectedTowardsOption(towardsOption: TowardsOption): void {
		this.selectedTowardsOption.next(towardsOption);
	}
	public getBalanceDetails(): Observable<BalanceDetails> {
		return this.balanceDetails.asObservable();
	}
	public setBalanceDetails(balanceDetails: BalanceDetails): void {
		this.balanceDetails.next(balanceDetails);
	}
	public getOrderDetails(): Observable<OrderDetails[]> {
		return this.orderDetails.asObservable();
	}
	public setOrderDetails(orderDetails: OrderDetails[]): void {
		this.orderDetails.next(orderDetails);
	}
}