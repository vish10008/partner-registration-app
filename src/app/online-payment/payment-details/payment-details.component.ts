import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { TowardsOption, BalanceDetails } from '../online-payment.model';

import { OnlinePaymentState } from '../online-payment.state';

import { OnlinePaymentService } from '../online-payment.service';

@Component({
  selector: 'payment-details',
  templateUrl: './payment-details.component.html'
})
export class PaymentDetailsComponent implements OnInit, OnDestroy {
	towardsOptions: TowardsOption[] = [];
	selectedTowardsOption: TowardsOption;
	balanceDetails: BalanceDetails;
	towardsOptionsSubscription: Subscription;
	selectedTowardsOptionSubscription: Subscription;
	balanceDetailsSubscription: Subscription;
	constructor(private onlinePaymentState: OnlinePaymentState, private onlinePaymentService: OnlinePaymentService, private router: Router) {
		this.towardsOptionsSubscription = this.onlinePaymentState.getTowardsOptions().subscribe(towardsOptions => {
			this.towardsOptions = towardsOptions;
		});		
		this.selectedTowardsOptionSubscription = this.onlinePaymentState.getSelectedTowardsOption().subscribe(selectedTowardsOption => {
			this.selectedTowardsOption = selectedTowardsOption;
		});		
		this.balanceDetailsSubscription = this.onlinePaymentState.getBalanceDetails().subscribe(balanceDetails => {
			this.balanceDetails = balanceDetails;
		});		
		this.loadTowardsOptions();
	}
	loadTowardsOptions(): void {
		this.onlinePaymentService.getTowardsOptions().subscribe(towardsOptions => {
			this.onlinePaymentState.setTowardsOptions(towardsOptions);
			let selectedTowardsOption: TowardsOption;
			if(towardsOptions.length > 0) {
				for(let towardsOption of towardsOptions) {
					if(towardsOption.selected) {
						selectedTowardsOption = towardsOption
					}
				}
				if(!selectedTowardsOption) {
					selectedTowardsOption = towardsOptions[0];
				}
				this.onlinePaymentState.setSelectedTowardsOption(selectedTowardsOption);
			}
		});
	}
	loadBalanceDetails(): void {
		this.onlinePaymentService.getBalanceDetails().subscribe(balanceDetails => { 
			this.onlinePaymentState.setBalanceDetails(balanceDetails);
		});
	}
	ngOnInit(): void {
		this.onlinePaymentState.setTitle("Payment Details");
		this.loadBalanceDetails();
	}
	onSelect(towardsOption: TowardsOption): void {
		this.onlinePaymentState.setSelectedTowardsOption(towardsOption);
		this.router.navigate([towardsOption.path]);
	}
	ngOnDestroy(): void {
		this.towardsOptionsSubscription.unsubscribe();
		this.selectedTowardsOptionSubscription.unsubscribe();
		this.balanceDetailsSubscription.unsubscribe();
	}
}
