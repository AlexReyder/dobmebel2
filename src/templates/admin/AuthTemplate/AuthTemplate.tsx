import { Logo } from '@/shared/ui/Icons/Logo/Logo'
import { ReactNode } from 'react'

interface Props{
  element: ReactNode
}
export const AuthTemplate = ({element}: Props) => {
	return (
		<section>
			 <div className='relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r'>
        <div className='absolute inset-0 bg-[url(/img/bgs/admin-bg.jpg)] bg-cover' />
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <Logo/>
        </div>
      </div>
      <div className='flex h-full items-center justify-center p-4 lg:p-8 w-full'>
        {
          element
        }
      </div>
    </div>
		</section>
	)
}