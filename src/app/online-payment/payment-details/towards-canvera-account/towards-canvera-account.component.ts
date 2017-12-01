import { Component, OnInit } from '@angular/core';

import { TowardsOption } from '../../online-payment.model';

import { OnlinePaymentState } from '../../online-payment.state';

import { TOWARDS_OPTIONS } from '../../online-payment.constants';

@Component({
  selector: 'towards-canvera-account',
  templateUrl: './towards-canvera-account.component.html'
})
export class TowardsCanveraAccountComponent implements OnInit {
	constructor(private onlinePaymentState: OnlinePaymentState) {}
	ngOnInit(): void {
		this.onlinePaymentState.setSelectedTowardsOption(TOWARDS_OPTIONS[1]);
	}
}
