'use client'

import { Button } from '@/shared/ui/button'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from '@/shared/ui/dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

import { handleAddPromo } from '@/shared/actions/promo'
import { promoAdd, PromoAddType, PromoType } from '@/shared/types/validation/promo'
import { PromoFileUploader } from '@/shared/ui/admin/promo-file-uploader'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

interface Props {
	currentRow?: PromoType
	open: boolean
	onOpenChange: (open: boolean) => void
}

export function PromoDialogAction({currentRow, open, onOpenChange}: Props) {
	const [image, setImage] = useState<string>(currentRow?.background ?? '')
	const isEdit = !!currentRow
	const form = useForm<PromoAddType>({
		resolver: zodResolver(promoAdd),
		defaultValues: isEdit
		? {
			...currentRow,
		}
		: {
			id: '',
			identifier: '',
			background: '',
		},
	})


	const onSubmit = async (values: PromoAddType) => {
		values.background = image
		const{ success, error} = await handleAddPromo(values)

		const toastMessage = isEdit ? 'Акция успешно изменена' : 'Акция успешно добавлена'
					if(success){
						toast.success(toastMessage)
					}
		
					if(error){
						toast.error('Произошла ошибка')
						console.log(error)
					}
	 resetValues()				
	 onOpenChange(false)		
	}

	const resetValues = () => {
		setImage('')
	}
	
	return (
		<>
		<Dialog
			open={open}
			onOpenChange={(state: boolean) => {
				form.reset()
				resetValues()
				onOpenChange(state)
			}}
		>
			<DialogContent className='sm:max-w-19/20 max-w-19/20  h-19/20 overflow-y-auto'>
				<DialogHeader className='text-left'>
					<DialogTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">{isEdit ? 'Изменить акцию' : 'Добавить новую акцию'}</DialogTitle>
				</DialogHeader>
				<div className='-mr-4 h-full w-full  py-1 pr-4'>
					<Form {...form}>
						<form
							id='product-form'
							onSubmit={form.handleSubmit(onSubmit)}
							className='space-y-4 p-0.5'
						>
								<FormField
                control={form.control}
                name='identifier'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
                      Идентификатор
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='col-span-4'
                        autoComplete='off'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='col-span-4 col-start-3' />
                  </FormItem>
                )}
              	/>
								 <p className='text-muted-foreground'>
										Разрешение изображения для десктопной версии 1920x480
									</p>
								 <PromoFileUploader value={image} onValueChange={setImage} text='десктопной версии'/>	
						</form>
					</Form>
				</div>
				<DialogFooter>
					<Button type='submit' form='product-form'>
					 Сохранить
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
		 <Toaster
				position="bottom-right"
				reverseOrder={false}
				toastOptions={{duration:3000}}
			/>
		</>
	)
}
