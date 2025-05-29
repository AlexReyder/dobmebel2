import { ReactNode } from 'react'
import { cn } from '../../utils/common'
import s from './Section.module.scss'
export const Section = ({children, className, id}: {children: ReactNode, className?: string, id?: string}) => {
	return(
		<section className={cn(s.Section, className)} id={id}>
			{children}
		</section>
	)
}