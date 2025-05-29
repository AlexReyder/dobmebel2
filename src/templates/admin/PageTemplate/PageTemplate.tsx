import DataTableProvider, { DataTableDialogType } from '@/shared/context/data-table-context'
import HeaderAdmin from '@/shared/ui/admin/header'
import { Main } from '@/shared/ui/admin/main'
import { DataTable } from '@/shared/ui/DataTable/data-table'
import { DialogActionButton } from '@/shared/ui/DataTable/dialogs/action-button'
import { ErrorAdminPageTemplate } from '@/templates/admin/'
import { ReactNode } from 'react'


interface Props{
	title: string,
	description: string,
	data: any
	columns: any
	actionBtnType?: DataTableDialogType
	actionBtnText?: string
	error: string | null
	dialog?: ReactNode
}

export const AdminPageTemplate = ({title, description, data, columns, error, actionBtnType, actionBtnText, dialog }: Props) => {
	return(
		<>
		{error === null ? 
		<DataTableProvider>
					<Main>
						<div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
								<HeaderAdmin title={title} description={description}/>
								{
									actionBtnText && actionBtnType ? (
											<DialogActionButton actionName={actionBtnText} actionType={actionBtnType}/>
									)
									: null
								}
						</div>
						<div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
								<DataTable data={data} columns={columns}/>
						</div>
					</Main>
					{dialog}
		</DataTableProvider> : <ErrorAdminPageTemplate/>}
		</>
	)
}