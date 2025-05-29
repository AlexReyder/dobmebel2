"use client"
import { handleSignIn } from '@/shared/actions/auth'
import { signInSchema, SignInType } from '@/shared/types/validation/auth'
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
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const SignInForm = () => {
  const [globalError, setGlobalError] = useState('')
  const form = useForm<SignInType>({
		resolver: zodResolver(signInSchema),
    defaultValues:{
      email: '',
      password: ''
    }
	})

  async function onSubmit(data: SignInType){
      const {success, error} = await handleSignIn(data)
      if(success){
        redirect('/admin')
      }
      if(error){
        console.log(error)
        setGlobalError(error)
        return null
      }
    	form.reset()
  }

  return (
      <section className="w-full">
        <div className="flex flex-col gap-4">
          <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow">
            <div className="mb-6 flex flex-col items-center">
              <h1 className="mb-2 text-3xl font-bold">Войти</h1>
              <p className="text-muted-foreground">Войти в личный аккаунт</p>
            </div>
            <Form {...form}>
              <form 
              className="grid gap-4" 
              id='signin-form' 
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
                        type='password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                   )}
                />
              <div className="flex justify-between">
                <Link href="#" className="text-sm text-primary hover:underline">
                    Забыл пароль?
                </Link>
              </div>
              <Button type="submit" className="mt-2 w-full" form='signin-form'>
                Войти
              </Button>
              </form>
              {globalError ? (
              <FormMessage className='!text-red-500'>
                {globalError}
              </FormMessage>
              )  : null}
            </Form>
          </div>
        </div>
      </section>
  );
};

