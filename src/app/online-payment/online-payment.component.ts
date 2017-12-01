import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { OnlinePaymentState } from './online-payment.state';

@Component({
  selector: 'online-payment',
  templateUrl: './online-payment.component.html'
})
export class OnlinePaymentComponent implements OnDestroy {
	title: string = '';
	titleSubscription: Subscription;
	constructor(private onlinePaymentState: OnlinePaymentState) {
		this.titleSubscription = this.onlinePaymentState.getTitle().subscribe(title => {
			this.title = title;
		});
	}
	ngOnDestroy(): void {
		this.titleSubscription.unsubscribe();
	}
}
