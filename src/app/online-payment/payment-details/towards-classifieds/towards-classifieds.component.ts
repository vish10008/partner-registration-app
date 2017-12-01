import { Component, OnInit } from '@angular/core';

import { TowardsOption } from '../../online-payment.model';

import { OnlinePaymentState } from '../../online-payment.state';

import { TOWARDS_OPTIONS } from '../../online-payment.constants';

@Component({
  selector: 'towards-classifieds',
  templateUrl: './towards-classifieds.component.html'
})
export class TowardsClassifiedsComponent implements OnInit {
	constructor(private onlinePaymentState: OnlinePaymentState) {}
	ngOnInit(): void {
		this.onlinePaymentState.setSelectedTowardsOption(TOWARDS_OPTIONS[2]);
	}
}
