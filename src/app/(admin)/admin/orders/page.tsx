import { isProtected } from '@/shared/actions/auth'
import { redirect } from 'next/navigation'

export default async function OrdersAdminPage() {
  await isProtected()
	return redirect('/admin/orders/main')
}