"use client"
import { useDataTable } from '@/shared/context/data-table-context'
import { UserDialogAdd } from './user-dialog-add'
import { UserDialogDelete } from './user-dialog-delete'

export function UserDialogs() {
	const { open, setOpen, currentRow, setCurrentRow } = useDataTable()
	return (
		<>
			<UserDialogAdd
				key='user-add'
				open={open === 'addUser'}
				onOpenChange={() => {
					setOpen('addUser')
					setTimeout(() => {
							setCurrentRow(null)
					}, 500)
				}}

			/>
			{currentRow && (
				<>
				 <UserDialogDelete
						key='user-delete'
						open={open === 'deleteUser'}
						onOpenChange={() => {
							setOpen('deleteUser')
							setTimeout(() => {
								setCurrentRow(null)
							}, 500)
						}}
						currentRow={currentRow}
					/>

				</>
			)}
		</>
	)
}