"use client"
import { DataTableDialogType, useDataTable } from '@/shared/context/data-table-context'
import { Button } from '@/shared/ui/button'
import { Plus } from 'lucide-react'

interface Props{
	actionType: DataTableDialogType
	actionName: string
}

export function DialogActionButton({actionType, actionName}: Props) {
	const { setOpen } = useDataTable()
	return (
				<div className='flex gap-2'>
						<Button className='space-x-1' onClick={() => setOpen(actionType)}>
						<span>{actionName}</span> <Plus size={18} />
						</Button>
				</div>
	)
}