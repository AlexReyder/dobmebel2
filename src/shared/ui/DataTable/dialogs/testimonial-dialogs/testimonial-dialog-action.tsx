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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/shared/ui/select"

import { handleAddTestimonial } from '@/shared/actions/testimonials'
import { testimonialAdd, TestimonialAddType, TestimonialType } from '@/shared/types/validation/testimonials'
import { Textarea } from '@/shared/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { Platform } from '@prisma/client'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

interface Props {
	currentRow?: TestimonialType
	open: boolean
	onOpenChange: (open: boolean) => void
}

export function TestimonialDialogAction({currentRow, open, onOpenChange}: Props) {
	const isEdit = !!currentRow

	const form = useForm<TestimonialAddType>({
		resolver: zodResolver(testimonialAdd),
		defaultValues: isEdit
		? {
			...currentRow,
		}
		: {
			id: '',
			type: Platform.YANDEX,
			quote: '',
			author: '',
		},
	})


	const onSubmit = async (values: TestimonialAddType) => {
		const{ success, error} = await handleAddTestimonial(values)

		const toastMessage = isEdit ? 'Отзыв успешно изменен' : 'Отзыв успешно добавлен'
					if(success){
						toast.success(toastMessage)
					}
		
					if(error){
						toast.error('Произошла ошибка')
						console.log(error)
					}
	 form.reset()				
	 onOpenChange(false)		
	}
	
	return (
		<>
		<Dialog
			open={open}
			onOpenChange={(state: boolean) => {
				form.reset()
				onOpenChange(state)
			}}
		>
			<DialogContent className='sm:max-w-19/20 max-w-19/20  h-10/20 overflow-y-auto content-start'>
				<DialogHeader className='text-left'>
					<DialogTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">{isEdit ? 'Изменить отзыв' : 'Добавить новый отзыв'}</DialogTitle>
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
                name='author'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
                      Автор
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
								<FormField
                control={form.control}
                name='quote'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
											Цитата
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className='col-span-4'
                        autoComplete='off'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='col-span-4 col-start-3' />
                  </FormItem>
                )}
              	/>
								<FormField
                control={form.control}
                name='type'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
											Платформа
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите платформу" />
                        </SelectTrigger>
                      </FormControl>
                    <SelectContent>
                      <SelectItem value="YANDEX">Яндекс</SelectItem>
                      <SelectItem value="GIS">2ГИС</SelectItem>
                    </SelectContent>
                   </Select>
                    <FormMessage className='col-span-4 col-start-3' />
                  </FormItem>
                )}
              	/>
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
