"use client"
import { useDataTable } from '@/shared/context/data-table-context'
import { Button } from '@/shared/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import { EllipsisVertical } from 'lucide-react'


interface DataTableRowActionsProps {
	row: any
	actionsData: any
}

export const DataTableRowActions =  ({ row, actionsData }: DataTableRowActionsProps) => {
	const { setOpen, setCurrentRow } = useDataTable()
	return (
		<>
			<DropdownMenu modal={false}>
				<DropdownMenuTrigger asChild>
					<Button
						variant='ghost'
						className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'
					>
						<EllipsisVertical className='h-4 w-4' />
						<span className='sr-only'>Открыть</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end' className='w-[200px]'>
					{
						actionsData.map((action) => (
						<div key={action.action}>
							<DropdownMenuSeparator />
							<DropdownMenuItem
								onClick={() => {
									setCurrentRow(row.original)
									setOpen(action.action)
								}}
							>
								{action.title}
							<DropdownMenuShortcut>
								{action.icon}
							</DropdownMenuShortcut>
						</DropdownMenuItem>
						</div>
						))
					}
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}