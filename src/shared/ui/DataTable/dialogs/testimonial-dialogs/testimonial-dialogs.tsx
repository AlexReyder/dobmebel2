"use client"
import { useDataTable } from '@/shared/context/data-table-context'
import { TestimonialDialogAction } from './testimonial-dialog-action'
import { TestimonialDialogDelete } from './testimonial-dialog-delete'

export function TestimonialDialogs() {
	const { open, setOpen, currentRow, setCurrentRow } = useDataTable()
	return (
		<>
			<TestimonialDialogAction
				key='testimonial-add'
				open={open === 'addTestimonial'}
				onOpenChange={() => {
					setOpen('addTestimonial')
					setTimeout(() => {
							setCurrentRow(null)
					}, 500)
				}}
			/>
			{currentRow && (
				<>

					<TestimonialDialogAction
						key='testimonial-edit'
						currentRow={currentRow}
						open={open === 'updateTestimonial'}
						onOpenChange={() => {
							setOpen('updateTestimonial')
							setTimeout(() => {
									setCurrentRow(null)
							}, 500)
						}}
					/>

				 <TestimonialDialogDelete
						key='testimonial-delete'
						open={open === 'deleteTestimonial'}
						onOpenChange={() => {
							setOpen('deleteTestimonial')
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