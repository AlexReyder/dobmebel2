import { ResetPasswordForm } from '@/features/admin/ResetPasswordForm'
import { AuthTemplate } from '@/templates/admin/'
import { Metadata } from 'next'

export const metadata: Metadata = {
		title: "Смена пароля"
};

export default async function ResetPasswordAdminPage() {
	return (
		<AuthTemplate element={<ResetPasswordForm/>}/>
	)
}