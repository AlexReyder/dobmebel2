import { isProtected } from '@/shared/actions/auth'
import { getMainOrders } from '@/shared/actions/orders'
import { OrderMainValidate } from '@/shared/types/validation/orders'
import { ordersMainColumns } from '@/shared/ui/DataTable/columns/orders-main-columns'
import { AdminPageTemplate } from '@/templates/admin'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: "Заявки"
};


export default async function OrdersMainAdminPage() {
  await isProtected()
	const ordersRawData = await getMainOrders()
	const data = OrderMainValidate.parse(ordersRawData.success)

	return (
		<AdminPageTemplate 
			title='Заявки'
			description='Просмотр полученных заявок'
			data={data}
			error={ordersRawData.error}
			columns={ordersMainColumns}
		/>
	);
}
