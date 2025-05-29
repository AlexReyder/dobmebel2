import { SignInForm } from '@/features/admin/SignInForm'
import { AuthTemplate } from '@/templates/admin/'
import { Metadata } from 'next'

export const metadata: Metadata = {
		title: "Вход"
};

export default async function SignInAdminPage() {

	return (
		<AuthTemplate element={<SignInForm/>}/>
	)
}