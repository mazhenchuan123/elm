import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { 
	Basic, 
	Users,
	Home,
	Profile,
	Balance,
	Benefit,
	Points,
	Order,
	Integral,
	Vipcard,
	Download,
	Service,
	Userinfo,
	Setname,
	Address,
	FromAddress,
	SearchAddress,
	BalanceDetail,
	PointsDetail,
	InvoiceRecord,
	Usecart,
	VipcardDetail,
	Payment,
	QuestionDetail,
	BenefitDetail,
	BenefitHistory,
	BenefitCommend,
	BenefitExchange,
} from '@/services/ads'

const routes = [
	{
		component: Users,
		path: '/users',
		
	},
	{
		component: Basic,
		path: '/',
		routes: [
			{
				component: BalanceDetail,
				path: '/balance/detail',
			},
			{
				component: Balance,
				path: '/balance',
			},
			{
				component: BenefitExchange,
				path: '/benefit/exchange',
			},
			{
				component: BenefitCommend,
				path: '/benefit/commend',
			},
			{
				component: BenefitHistory,
				path: '/benefit/history',
			},
			{
				component:	BenefitDetail,
				path: '/benefit/detail',
			},
			{
				component: Benefit,
				path: '/benefit',
			},
		
			{
				component: PointsDetail,
				path: '/points/detail',
			},
			{
				component: Points,
				path: '/points',
			},
			{
				component: 	Payment,
				path: '/vipcard/payment',
			},
			{
				component: Order,
				path: '/order',
			},
		
			{
				component: Integral,
				path: '/integral',
			},
			{
				component: Usecart,
				path: '/vipcard/usecart',
			},
			{
				component: VipcardDetail,
				path: '/vipcard/detail',
			},
			{
				component: Vipcard,
				path: '/vipcard',
			},
			{
				component: InvoiceRecord,
				path: '/invoicerecord',
			},
			{
				component: Download,
				path: '/download',
			},
			
			{
				component: QuestionDetail,
				path: '/service/questiondetail',
			},
			{
				component: Service,
				path: '/service',
			},
			{
				component: Userinfo,
				path: '/userinfo',
			},
			{
				component: Setname,
				path: '/setname',
			},
			{
				component: Address,
				path: '/address',
			},
			{
				component: FromAddress,
				path: '/fromaddress',
			},
			{
				component: SearchAddress,
				path: '/searchaddress',
			},
			{
				component: Home,
				path: '/',
				routes: [
					{
						component: Profile,
						path: '/profile',
					},
				]
			},

		]
	
	}
]

export default class extends React.PureComponent {
	render () {
		return(
			<BrowserRouter >
				{renderRoutes(routes)}
			</BrowserRouter>
		)
	}
}
