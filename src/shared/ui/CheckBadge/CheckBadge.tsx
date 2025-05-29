import { BadgeCheck } from 'lucide-react'
import s from './CheckBadge.module.scss'

export const CheckBadge = () => {
	return(
		<div className={s.BadgeWrapper}>
			<BadgeCheck className={s.BadgeIcon}/>
		</div>
	)
}