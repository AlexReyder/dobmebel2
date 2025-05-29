import { cn } from '@/shared/utils/common'
import Link from 'next/link'
import { ReactNode } from 'react'
import s from './PrimaryLink.module.scss'

interface Props{
	className?: string
	href: string
	children: ReactNode
}

export const PrimaryLink = (props: React.ComponentProps<"a"> & Props) => {
	return(
		<Link {...props} className={cn('relative z-0 h-12 rounded-full bg-(--c-s) px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-(--c-s) hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500' ,s.Link, props.className)}  href={props.href}>
			{props.children}
		</Link>
	)
}