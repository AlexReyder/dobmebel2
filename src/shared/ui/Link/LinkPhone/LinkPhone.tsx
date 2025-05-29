import { cn } from '@/shared/utils/common'
import { Phone } from 'lucide-react'
import Link from 'next/link'
import cls from './Link.module.scss'
interface LinkProps {
	to: string
	className?: string
	text: string
}

export const LinkPhone = ({ to, className, text }: LinkProps) => {
	return (
		<Link href={to} className={cn(cls.Link, className)}>
			<Phone className={cls.Icon} />
			<p>
				{text}
			</p>
		</Link>
	)
}
