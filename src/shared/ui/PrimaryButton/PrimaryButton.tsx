import { cn } from '@/shared/utils/common'
import { ReactNode } from 'react'
import s from './PrimaryButton.module.scss'

interface Props{
	className?: string
	children: ReactNode
}

export const PrimaryButton = (props: React.ComponentProps<"button"> & Props) => {
	return(
		<button {...props} className={cn('relative z-0 h-12 rounded-full bg-(--c-s) px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-(--c-s) hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500' ,s.Button, props.className)}>
			{props.children}
		</button>
	)
}