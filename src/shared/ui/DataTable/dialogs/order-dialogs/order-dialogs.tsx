"use client"
import { useDataTable } from '@/shared/context/data-table-context'
import { OrderDialogData } from './order-dialog-data'

export function OrderDialogs() {
	const { open, setOpen, currentRow, setCurrentRow } = useDataTable()
	return (
		<>

			{currentRow && (
				<>
				 <OrderDialogData
						key='order-quiz-data'
						open={open === 'openOrderQuizData'}
						onOpenChange={() => {
							setOpen('openOrderQuizData')
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