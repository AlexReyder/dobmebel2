"use client"
import { handleResetPassword } from '@/shared/actions/auth'
import { resetPasswordSchema, ResetPasswordType } from '@/shared/types/validation/auth'
import { Button } from '@/shared/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { redirect, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

export const ResetPasswordForm = () => {
  const params = useSearchParams()

	const email = params.get('email') ?? '';
	const token = params.get('token') ?? '';

  const form = useForm<ResetPasswordType>({
		resolver: zodResolver(resetPasswordSchema),
    defaultValues:{
      password: '',
      confirmPassword: '',
    }
	})

  async function onSubmit(data: ResetPasswordType){
      const {success, error} = await handleResetPassword(email, token, data)
      if(success){
        redirect('/admin/auth/signin')
      }
      if(error){
        toast.error('Произошла ошибка.')
        console.log(error)
        return null
      }
    	form.reset()
  }

  return (
    <>
      <section className="w-full">
        <div className="flex flex-col gap-4">
          <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow">
            <div className="mb-6 flex flex-col items-center">
              <h1 className="mb-2 text-3xl font-bold">Сменить пароль</h1>
              <p className="text-muted-foreground">Введите новый пароль для входа в панель администратора</p>
            </div>
            <Form {...form}>
              <form 
              className="grid gap-4" 
              id='recovery-form' 
              onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                     <FormControl>
                      <Input
                        placeholder='Пароль'
                        className='col-span-4'
                        autoComplete='off'
                        type='text'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                   )}
                />
                 <FormField
                  control={form.control}
                  name='confirmPassword'
                  render={({ field }) => (
                    <FormItem>
                     <FormControl>
                      <Input
                        placeholder='Повторите пароль'
                        className='col-span-4'
                        autoComplete='off'
                        type='text'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                   )}
                />
              <Button type="submit" className="mt-2 w-full" form='recovery-form'>
                Сменить пароль
              </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{duration:3000}}
      />
    </>

  );
};

