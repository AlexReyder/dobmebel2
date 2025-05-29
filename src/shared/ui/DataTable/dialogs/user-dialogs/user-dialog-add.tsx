'use client'

import { handleSignUp } from '@/shared/actions/auth'
import { userRoleTypeAdmin } from '@/shared/types/admin'
import { userAddSchema, UserAddType } from '@/shared/types/admin/user'
import { SelectDropdown } from '@/shared/ui/admin/select-dropdown'
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
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'


interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UserDialogAdd({ open, onOpenChange }: Props) {
  const form = useForm<UserAddType>({
    resolver: zodResolver(userAddSchema),
    defaultValues: {
          firstName: '',
          middleName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          role: "ADMIN"
    },
  })

  const onSubmit = async (values: UserAddType) => {
 
    const {success, error} = await handleSignUp(values)
    form.reset()
          if(success){
            toast.success('Пользователь успешно зарегистрирован')
          }
    
          if(error){
            toast.error('Произошла ошибка')
          }

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
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader className='text-left'>
          <DialogTitle>Зарегистрировать нового сотрудника</DialogTitle>
        </DialogHeader>
        <div className='-mr-4 h-[26.25rem] w-full overflow-y-auto py-1 pr-4'>
          <Form {...form}>
            <form
              id='user-form'
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-4 p-0.5'
            > 
						<FormField
                control={form.control}
                name='lastName'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
                      Фамилия
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Фамилия'
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
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
                     Имя
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Имя'
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
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
                      Отчество
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Отчество'
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
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
                      Электронная почта
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Электронная почта'
                        className='col-span-4'
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
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
                      Номер телефона
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Номер телефона'
                        className='col-span-4'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='col-span-4 col-start-3' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='role'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2 text-right'>
                      Уровень доступа
                    </FormLabel>
                    <SelectDropdown
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      placeholder='Уровень доступа'
                      className='col-span-4'
                      items={userRoleTypeAdmin.map(({ title, value }) => ({
                        title,
                        value,
                      }))}
                    />
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
                      Пароль
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Пароль'
                        className='col-span-4'
												type='password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='col-span-4 col-start-3' />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        <DialogFooter>
          <Button type='submit' form='user-form'>
           Зарегистрировать
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