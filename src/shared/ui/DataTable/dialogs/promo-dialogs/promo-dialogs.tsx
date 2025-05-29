"use client"
import { useDataTable } from '@/shared/context/data-table-context'
import { PromoDialogAction } from './promo-dialog-action'
import { PromoDialogDelete } from './promo-dialog-delete'

export function PromoDialogs() {
	const { open, setOpen, currentRow, setCurrentRow } = useDataTable()
	return (
		<>
			<PromoDialogAction
				key='promo-add'
				open={open === 'addPromo'}
				onOpenChange={() => {
					setOpen('addPromo')
					setTimeout(() => {
							setCurrentRow(null)
					}, 500)
				}}
			/>
			{currentRow && (
				<>

					<PromoDialogAction
						key='promo-edit'
						currentRow={currentRow}
						open={open === 'updatePromo'}
						onOpenChange={() => {
							setOpen('updatePromo')
							setTimeout(() => {
									setCurrentRow(null)
							}, 500)
						}}
					/>

				 <PromoDialogDelete
						key='promo-delete'
						open={open === 'deletePromo'}
						onOpenChange={() => {
							setOpen('deletePromo')
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