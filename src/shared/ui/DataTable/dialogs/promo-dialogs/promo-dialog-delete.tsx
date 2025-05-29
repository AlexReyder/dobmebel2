'use client'

import { handleDeletePromo } from '@/shared/actions/promo'
import { PromoType } from '@/shared/types/validation/promo'
import { ConfirmDialog } from '@/shared/ui/admin/confirm-dialog'
import { TriangleAlert } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

interface Props {
	open: boolean
	onOpenChange: (open: boolean) => void
	currentRow: PromoType
}

export function PromoDialogDelete({ open, onOpenChange, currentRow }: Props) {
	const handleDelete = async () => {
		const {success, error} = await handleDeletePromo(currentRow.id)
		if(success){
				toast.success('Акция успешно удалена')
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
				 Удалить акцию
				</span>
			}
			desc={
				<div className='space-y-4'>
					<p className='mb-2'>
						Вы уверены что хотите удалить акцию?
						Это перманентно удалит акцию с сайта.
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