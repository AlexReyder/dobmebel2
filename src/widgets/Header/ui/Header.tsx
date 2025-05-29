'use client'
import { Logo } from '@/shared/ui/Icons/Logo/Logo'
import { TelegramIcon } from '@/shared/ui/Icons/TelegramIcon/TelegramIcon'
import { WhatsAppIcon } from '@/shared/ui/Icons/WhatsAppIcon/WhatsAppIcon'
import { LinkPhone } from '@/shared/ui/Link/LinkPhone/LinkPhone'
import { MessangerLink } from '@/shared/ui/Link/MessangerLink/MessangerLink'
import { Menu } from '@/widgets/Menu'
import cls from './Header.module.scss'
interface HeaderProps {
	className?: string
	bg?: 'black'
}

export const Header = ({ className, bg }: HeaderProps) => {
	return (
		<header className={`${cls.Header} ${bg ? cls[bg] : null}`}>
				<Logo/>
			<div className={cls.Navigation}>
				<div className={cls.Contact}>
					<div className={cls.Messangers}>
						<MessangerLink
							to='https://wa.me/79081567688'
							className='f-c'
							icon={<WhatsAppIcon className={cls.Icon} />}
						/>
						<MessangerLink
							to='https://t.me/+79063667555'
							className='f-c'
							icon={<TelegramIcon className={cls.Icon} />}
						/>
					</div>
					<LinkPhone to='tel:+79586678431' text='+7 958 667-84-31' />
				</div>
				<Menu />
			</div>
		</header>
	)
}
