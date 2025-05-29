import { redirect } from 'next/navigation'

export default  function AuthAdminPage() {
	return redirect('/admin/auth/signin')
}