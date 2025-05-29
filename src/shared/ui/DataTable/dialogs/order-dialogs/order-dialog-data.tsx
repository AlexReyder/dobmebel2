'use client'

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle
} from '@/shared/ui/dialog'

import { OrderQuizType } from '@/shared/types/validation/orders'


interface Props {
	currentRow?: OrderQuizType
	open: boolean
	onOpenChange: (open: boolean) => void
}

export function OrderDialogData({ currentRow, open, onOpenChange }: Props) {


	return (
		<>
		<Dialog
				open={open}
				onOpenChange={(state) => {
					onOpenChange(state)
				}}
			>
				<DialogContent className='sm:max-w-lg'>
					<DialogHeader className='text-left'>
						<DialogTitle>
						Ответы на вопросы
						</DialogTitle>
					</DialogHeader>
					<div className='-mr-4 h-[26.25rem] w-full overflow-y-auto py-1 pr-4'>
							{
								currentRow?.data.map((item, i) => (
									<div className='flex items-center gap-2 mt-2'>
										<h4 className="leading-7 font-semibold tracking-tight">
											{i}. Вопрос: {item.question}</h4>
										<p className="leading-7">Ответ: {item.answer}</p>
								</div>
								))
							}
					</div>
				</DialogContent>
		</Dialog>
		</>
	)
}