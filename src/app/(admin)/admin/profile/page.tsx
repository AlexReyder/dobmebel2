import EditProfile from '@/features/admin/EditProfile/EditProfile'
import { handleGetProfile, isProtected } from '@/shared/actions/auth'
import { userDb } from '@/shared/types/admin/user'
import { Main } from '@/shared/ui/admin/main'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: "Профиль"
};

export default async function ProfileAdminPage() {
	await isProtected()
		const userRawData = await handleGetProfile()
		const data = userDb.parse(userRawData.success)

	return (
		<Main>
			<EditProfile data={data}/>
		</Main>
	);
}
