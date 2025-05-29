'use client'

import { IImagesData } from '@/shared/types/admin/upload'
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

import { handleAddCase } from '@/shared/actions/cases'
import { casesAdd, CasesAddType, CasesType } from '@/shared/types/validation/cases'
import { FileUploader } from '@/shared/ui/admin/file-uploader'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

interface Props {
	currentRow?: CasesType
	open: boolean
	onOpenChange: (open: boolean) => void
}

export function CaseDialogAction({currentRow, open, onOpenChange}: Props) {
	const isEdit = !!currentRow
	const loadImages = isEdit ? currentRow.images : {}
	const [images, setImages] = useState<IImagesData | {}>(loadImages)

	const form = useForm<CasesAddType>({
		resolver: zodResolver(casesAdd),
		defaultValues: isEdit
		? {
			...currentRow,
		}
		: {
			id: '',
			title: '',
			subtitle:'',
			prodtime: '',
			style: '',
			guarantee: '',
			sizes: '',
			height: '',
			facade: '',
			furniture: '',
			profile: '',
			price: '',
			images: {},
		},
	})


	const onSubmit = async (values: CasesAddType) => {
		values.images = images
		const{ success, error} = await handleAddCase(values)

		const toastMessage = isEdit ? 'Кейс успешно изменен' : 'Кейс успешно добавлен'
					if(success){
						toast.success(toastMessage)
					}
		
					if(error){
						toast.error('Произошла ошибка')
						console.log(error)
					}
	 onOpenChange(false)		
	 resetForm()
	}
	
	function resetForm (){
		setImages({})
	}

	return (
		<>
		<Dialog
			open={open}
			onOpenChange={(state: boolean) => {
				form.reset()
				resetForm()
				onOpenChange(state)
			}}
		>
			<DialogContent className='sm:max-w-19/20 max-w-19/20  h-19/20 overflow-y-auto'>
				<DialogHeader className='text-left'>
					<DialogTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">{isEdit ? 'Изменить кейс' : 'Добавить новый кейс'}</DialogTitle>
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
                name='title'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
                      Заголовок
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
                name='subtitle'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
											Подзаголовок
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
                name='prodtime'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
											Срок изготовления
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
                name='style'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
											Стиль кухни
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
                name='guarantee'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
											Гарантия
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
                name='sizes'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
											Размеры
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
                name='height'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
											Высота
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
                name='facade'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
											Фасады
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
                name='furniture'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
											Фурнитура
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
                name='profile'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
											Ручка-профиль
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
                name='price'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
											Стоимость
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
							<h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-left my-12">
								Фотографии:
							</h4>	
							<ProductImages images={images} setImages={setImages}/>
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



const ProductImages = ({ images, setImages}: {images:any, setImages: any
	}) =>{
		return(
				<FileUploader
          value={images}
          onValueChange={setImages}
					color='black'
          maxFiles={10}
          maxSize={10 * 1024 * 1024}
        />
		)
}
