import { handleGetAllUsers, isProtected, isSuperAdmin } from '@/shared/actions/auth'
import { UserDbValidate } from '@/shared/types/admin/user'
import { userColumns } from '@/shared/ui/DataTable/columns/users-columns'
import { UserDialogs } from '@/shared/ui/DataTable/dialogs/user-dialogs/user-dialogs'
import { AdminPageTemplate } from '@/templates/admin'
import { NotSuperAdminTemplate } from '@/templates/admin/NotSuperAdminTemplate/NotSuperAdminTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: "Сотрудники"
};


export default async function UsersAdminPage() {
  await isProtected()
	const usersRawData = await handleGetAllUsers()
	const data = UserDbValidate.parse(usersRawData.success)
	const isAllowed = await isSuperAdmin()
	return (
		<>
		{
			isAllowed.success ? (
			<AdminPageTemplate 
					title='Сотрудники'
					description='Добавление и удаление сотрудников, имеющих доступ к панели администратора'
					data={data}
					error={usersRawData.error}
					columns={userColumns}
					actionBtnType='addUser'
					actionBtnText='Добавить нового сотрудника'
					dialog={<UserDialogs/>}
				/>
			) : (
				<NotSuperAdminTemplate/>
			)
		}	
		</>
	);
}
