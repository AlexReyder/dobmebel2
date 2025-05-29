'use client'

import { handleDeleteTestimonial } from '@/shared/actions/testimonials'
import { TestimonialType } from '@/shared/types/validation/testimonials'
import { ConfirmDialog } from '@/shared/ui/admin/confirm-dialog'
import { TriangleAlert } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

interface Props {
	open: boolean
	onOpenChange: (open: boolean) => void
	currentRow: TestimonialType
}

export function TestimonialDialogDelete({ open, onOpenChange, currentRow }: Props) {
	const handleDelete = async () => {
		const {success, error} = await handleDeleteTestimonial(currentRow.id)
		if(success){
				toast.success('Отзыв успешно удален')
			}

		if(error){
				toast.error('Произошла ошибка')
				console.log(error)
			}
		onOpenChange(false)
	}

	return (
		<>
		 <ConfirmDialog
			open={open}
			onOpenChange={onOpenChange}
			handleConfirm={handleDelete}
			title={
				<span className='text-destructive'>
					<TriangleAlert
						className='mr-1 inline-block stroke-destructive'
						size={18}
					/>{' '}
				 Удалить отзыв
				</span>
			}
			desc={
				<div className='space-y-4'>
					<p className='mb-2'>
						Вы уверены что хотите удалить отзыв?
						Это перманентно удалит отзыв с сайта.
					</p>
				</div>
			}
			confirmText='Удалить'
			cancelBtnText='Отмена'
			destructive
		/>
		 <Toaster
					position="bottom-right"
					reverseOrder={false}
					toastOptions={{duration:3000}}
				/>
		</>
	 
	)
}