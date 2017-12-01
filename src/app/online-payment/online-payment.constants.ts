import { TowardsOption, Incentive, BalanceDetails, OrderDetails } from './online-payment.model';

export const PATHS: any = {
	"Order": "/online-payment/towards-order",
	"Wallet": "/online-payment/towards-canvera-account",
	"Classifieds": "/online-payment/towards-classifieds"
}

export const TOWARDS_OPTIONS: TowardsOption[] = [
	{ name: 'Order', title: "Order", selected: true, path: "/online-payment/towards-order" },
	{ name: 'Wallet', title: "Canvera Account", selected: false, path: "/online-payment/towards-canvera-account" },
	{ name: 'Classifieds', title: "Classifieds", selected: false, path: "/online-payment/towards-classifieds" }
]

export const BALANCE_DETAILS: BalanceDetails = {
	totalIncentiveBalanceAmount: 50000,
	totalCreditBalanceAmount: 800000,
	incentives: [
		{ balanceAmount: 300, expiryDate: '30 Sep 2017' },
		{ balanceAmount: 200, expiryDate: '2 Oct 2017' }
	]
}

export const ORDER_DETAILS: OrderDetails[] = [
	{ orderNumber: 'IC-123456', partnerName: "Partner 1", orderDate: '12 Sep 2017', description: 'Indi-Pro Premium Layflat 12X18 Landscape 50 Pages', designBalanceAmount: 200000, totalBalanceAmount: 500000 },
	{ orderNumber: 'IC-123456', partnerName: "Partner 1", orderDate: '12 Sep 2017', description: 'Indi-Pro Premium Layflat 12X18 Landscape 50 Pages', designBalanceAmount: 200000, totalBalanceAmount: 500000 },
	{ orderNumber: 'IC-123456', partnerName: "Partner 1", orderDate: '12 Sep 2017', description: 'Indi-Pro Premium Layflat 12X18 Landscape 50 Pages', designBalanceAmount: 200000, totalBalanceAmount: 500000 },
	{ orderNumber: 'IC-123456', partnerName: "Partner 1", orderDate: '12 Sep 2017', description: 'Indi-Pro Premium Layflat 12X18 Landscape 50 Pages', designBalanceAmount: 200000, totalBalanceAmount: 500000 },
	{ orderNumber: 'IC-123456', partnerName: "Partner 1", orderDate: '12 Sep 2017', description: 'Indi-Pro Premium Layflat 12X18 Landscape 50 Pages', designBalanceAmount: 200000, totalBalanceAmount: 500000 },
	{ orderNumber: 'IC-123456', partnerName: "Partner 1", orderDate: '12 Sep 2017', description: 'Indi-Pro Premium Layflat 12X18 Landscape 50 Pages', designBalanceAmount: 200000, totalBalanceAmount: 500000 },
	{ orderNumber: 'IC-123456', partnerName: "Partner 1", orderDate: '12 Sep 2017', description: 'Indi-Pro Premium Layflat 12X18 Landscape 50 Pages', designBalanceAmount: 200000, totalBalanceAmount: 500000 },
	{ orderNumber: 'IC-123456', partnerName: "Partner 1", orderDate: '12 Sep 2017', description: 'Indi-Pro Premium Layflat 12X18 Landscape 50 Pages', designBalanceAmount: 200000, totalBalanceAmount: 500000 },
	{ orderNumber: 'IC-123456', partnerName: "Partner 1", orderDate: '12 Sep 2017', description: 'Indi-Pro Premium Layflat 12X18 Landscape 50 Pages', designBalanceAmount: 200000, totalBalanceAmount: 500000 },
	{ orderNumber: 'IC-123456', partnerName: "Partner 1", orderDate: '12 Sep 2017', description: 'Indi-Pro Premium Layflat 12X18 Landscape 50 Pages', designBalanceAmount: 200000, totalBalanceAmount: 500000 },
	{ orderNumber: 'IC-123456', partnerName: "Partner 1", orderDate: '12 Sep 2017', description: 'Indi-Pro Premium Layflat 12X18 Landscape 50 Pages', designBalanceAmount: 200000, totalBalanceAmount: 500000 },
	{ orderNumber: 'IC-123456', partnerName: "Partner 1", orderDate: '12 Sep 2017', description: 'Indi-Pro Premium Layflat 12X18 Landscape 50 Pages', designBalanceAmount: 200000, totalBalanceAmount: 500000 },
	{ orderNumber: 'IC-123456', partnerName: "Partner 1", orderDate: '12 Sep 2017', description: 'Indi-Pro Premium Layflat 12X18 Landscape 50 Pages', designBalanceAmount: 200000, totalBalanceAmount: 500000 },
	{ orderNumber: 'IC-123456', partnerName: "Partner 1", orderDate: '12 Sep 2017', description: 'Indi-Pro Premium Layflat 12X18 Landscape 50 Pages', designBalanceAmount: 200000, totalBalanceAmount: 500000 },
	{ orderNumber: 'IC-123456', partnerName: "Partner 1", orderDate: '12 Sep 2017', description: 'Indi-Pro Premium Layflat 12X18 Landscape 50 Pages', designBalanceAmount: 200000, totalBalanceAmount: 500000 }
]
