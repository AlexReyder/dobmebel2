import { isProtected } from '@/shared/actions/auth'
import { redirect } from 'next/navigation'

export default  async function ContentAdminPage() {
	await isProtected()
	return redirect('/admin/content/cases')
}