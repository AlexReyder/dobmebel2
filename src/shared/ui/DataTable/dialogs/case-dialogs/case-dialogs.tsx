"use client"
import { useDataTable } from '@/shared/context/data-table-context'
import { CaseDialogAction } from './case-dialog-action'
import { CaseDialogDelete } from './case-dialog-delete'

export function CaseDialogs() {
	const { open, setOpen, currentRow, setCurrentRow } = useDataTable()
	return (
		<>
			<CaseDialogAction
				key='case-add'
				open={open === 'addCase'}
				onOpenChange={() => {
					setOpen('addUser')
					setTimeout(() => {
							setCurrentRow(null)
					}, 500)
				}}
			/>
			{currentRow && (
				<>

					<CaseDialogAction
						key='case-edit'
						currentRow={currentRow}
						open={open === 'updateCase'}
						onOpenChange={() => {
							setOpen('updateCase')
							setTimeout(() => {
									setCurrentRow(null)
							}, 500)
						}}
					/>

				 <CaseDialogDelete
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