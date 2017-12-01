import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TowardsOption, OrderDetails } from '../../online-payment.model';

import { OnlinePaymentState } from '../../online-payment.state';

import { OnlinePaymentService } from '../../online-payment.service';

import { TOWARDS_OPTIONS } from '../../online-payment.constants';

@Component({
  selector: 'towards-order',
  templateUrl: './towards-order.component.html'
})
export class TowardsOrderComponent implements OnInit, OnDestroy {
	orderDetails: OrderDetails[];
	orderDetailsSubscription: Subscription;
	constructor(private onlinePaymentState: OnlinePaymentState, private onlinePaymentService: OnlinePaymentService) {
		this.orderDetailsSubscription = this.onlinePaymentState.getOrderDetails().subscribe(orderDetails => {
			this.orderDetails = orderDetails;
		});
	}
	selectTowardsOption(): void {
		this.onlinePaymentState.setSelectedTowardsOption(TOWARDS_OPTIONS[0]);
	}
	loadOrderDetails(): void {
		this.onlinePaymentService.getOrderDetails().subscribe(orderDetails => {
			this.onlinePaymentState.setOrderDetails(orderDetails);
		});
	}
	ngOnInit(): void {
		this.selectTowardsOption();
		this.loadOrderDetails();
	}
	ngOnDestroy(): void {	
		this.orderDetailsSubscription.unsubscribe();
	}
}
