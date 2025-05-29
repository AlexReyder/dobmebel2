'use client'

import { handleDeleteCase } from '@/shared/actions/cases'
import { CasesType } from '@/shared/types/validation/cases'
import { ConfirmDialog } from '@/shared/ui/admin/confirm-dialog'
import { TriangleAlert } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

interface Props {
	open: boolean
	onOpenChange: (open: boolean) => void
	currentRow: CasesType
}

export function CaseDialogDelete({ open, onOpenChange, currentRow }: Props) {
	const handleDelete = async () => {
		const {success, error} = await handleDeleteCase(currentRow.id)
		if(success){
				toast.success('Кейс успешно удален')
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
				 Удалить сотрудника
				</span>
			}
			desc={
				<div className='space-y-4'>
					<p className='mb-2'>
						Вы уверены что хотите удалить
						<span className='font-bold'> {currentRow.title}</span>?
						<br />
						Это перманентно удалит пользователя с базы данных.
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