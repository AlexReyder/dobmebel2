import { cn } from '@/shared/utils/common'
import { ReactNode } from 'react'
import cls from './MessangerLink.module.scss'

interface MessangerLinkProps {
	className?: string
	to: string
	icon: ReactNode
}

export const MessangerLink = ({ to, className, icon }: MessangerLinkProps) => {
	return (
		<a
			href={to}
			target='_blank'
			className={cn(cls.MessangerLink,className)}
		>
			{icon}
		</a>
	)
}
