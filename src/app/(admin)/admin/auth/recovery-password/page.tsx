import { RecoveryPasswordForm } from '@/features/admin/RecoveryPasswordForm'
import { AuthTemplate } from '@/templates/admin/'
import { Metadata } from 'next'

export const metadata: Metadata = {
		title: "Сброс пароля"
};

export default async function RecoveryPasswordAdminPage() {

	return (
		<AuthTemplate element={<RecoveryPasswordForm/>}/>
	)
}