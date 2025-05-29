"use client"

import { handleUpdateProfile } from '@/shared/actions/auth'
import { updateProfileSchema, UpdateProfileType } from '@/shared/types/validation/auth'
import HeaderAdmin from '@/shared/ui/admin/header'
import { Button } from '@/shared/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

  const EditProfile = ({data}:{data: any}) => {
		const {firstName, middleName, lastName, email, phone} = data;
		const form = useForm<UpdateProfileType>({
			defaultValues: {
				email: email ?? "",
				firstName: firstName ?? "",
				middleName: middleName ?? "",
				lastName: lastName ?? "",
				phone: phone ?? "",
				password: ''
			},
			resolver: zodResolver(updateProfileSchema)
		})

		async function onSubmit(data: UpdateProfileType) {
			const {success, error} = await handleUpdateProfile(data)
							if(success){
								toast.success('Профиль успешно обновлен!')
							}
				
							if(error){
								toast.error('Произошла ошибка')
								console.log(error)
							}
		}


	return (
			<div className='mb-2 flex flex-col  justify-between space-y-2'>
				<HeaderAdmin title='Учётные данные' description='Вы можете изменить свои личные данные'/>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="mt-6" id='profile-form'>
						<FormField
							control={form.control}
							name='lastName'
							render={({ field }) => (
								<FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0 mb-2'>
								<FormLabel className='col-span-2 text-right'>
										Фамилия
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
							name='firstName'
							render={({ field }) => (
								<FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0 mb-2'>
								<FormLabel className='col-span-2 text-right'>
										Имя
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
							name='middleName'
							render={({ field }) => (
								<FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0 mb-2'>
								<FormLabel className='col-span-2 text-right'>
										Отчество
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
							name='email'
							render={({ field }) => (
								<FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0 mb-2'>
								<FormLabel className='col-span-2 text-right'>
										Электронная почта
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
							name='phone'
							render={({ field }) => (
								<FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0 mb-2'>
								<FormLabel className='col-span-2 text-right'>
										Номер телефона
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
							name='password'
							render={({ field }) => (
								<FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
								<FormLabel className='col-span-2 text-right'>
										Новый пароль
								</FormLabel>
								<FormControl>
								<Input
									className='col-span-4'
									autoComplete='off'
									type='password'
									{...field}
								 />
								</FormControl>
								<FormMessage className='col-span-4 col-start-3' />
								</FormItem>
								)}
							/>
					</form>
					<div className='flex items-center mt-4 justify-center'>
					<Button type='submit' form='profile-form'>Сохранить</Button>
					</div>
				</Form>
				 <Toaster
								position="bottom-right"
								reverseOrder={false}
								toastOptions={{duration:3000}}
							/>
		</div>
	)
}

export default EditProfile
