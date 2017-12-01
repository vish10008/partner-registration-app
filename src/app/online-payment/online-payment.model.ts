export class TowardsOption {
	name: string;
	title: string;
	selected: boolean;
	path: any;
}

export class Incentive {
	balanceAmount: number = 0;
	expiryDate: string = '';
}

export class BalanceDetails {
	totalIncentiveBalanceAmount: number = 0;
	totalCreditBalanceAmount: number = 0;
	incentives: Incentive[] = [];
}

export class OrderDetails {
	orderNumber: string = '';
	partnerName: string = '';
	orderDate: string = '';
	description: string = '';
	designBalanceAmount: number = 0;
	totalBalanceAmount: number = 0;
}