import { isProtected } from '@/shared/actions/auth'
import { getQuizOrders } from '@/shared/actions/orders'
import { OrderQuizValidate } from '@/shared/types/validation/orders'
import { ordersQuizColumns } from '@/shared/ui/DataTable/columns/orders-quiz-columns'
import { OrderDialogs } from '@/shared/ui/DataTable/dialogs/order-dialogs/order-dialogs'
import { AdminPageTemplate } from '@/templates/admin'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: "Квиз-заявки"
};


export default async function OrdersMainAdminPage() {
  await isProtected()
	const ordersRawData = await getQuizOrders()
	const data = OrderQuizValidate.parse(ordersRawData.success)

	return (
		<AdminPageTemplate 
			title='Квиз-заявки'
			description='Просмотр полученных квиз-заявок'
			data={data}
			error={ordersRawData.error}
			columns={ordersQuizColumns}
			dialog={<OrderDialogs/>}
		/>
	);
}
