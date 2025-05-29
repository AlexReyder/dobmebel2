"use client"
import { handleRecoveryPassword } from '@/shared/actions/auth'
import { recoveryPasswordSchema, RecoveryPasswordType } from '@/shared/types/validation/auth'
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
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

export const RecoveryPasswordForm = () => {
  const form = useForm<RecoveryPasswordType>({
		resolver: zodResolver(recoveryPasswordSchema),
    defaultValues:{
      email: '',
    }
	})

  async function onSubmit(data: RecoveryPasswordType){
      const {success, error} = await handleRecoveryPassword(data)
      if(success){
        toast.success('Письмо с восстановлением пароля отправлено на почту.')
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
              <h1 className="mb-2 text-3xl font-bold">Восстановление пароля</h1>
              <p className="text-muted-foreground">Введите электронную почту от аккаунта панели администратора</p>
            </div>
            <Form {...form}>
              <form 
              className="grid gap-4" 
              id='recovery-form' 
              onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                     <FormControl>
                      <Input
                        placeholder='Электронная почта'
                        className='col-span-4'
                        autoComplete='off'
                        type='email'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                   )}
                />
              <Button type="submit" className="mt-2 w-full" form='recovery-form'>
                Восстановить
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

