'use client'

import { TelegramIcon } from '@/shared/ui/Icons/TelegramIcon/TelegramIcon'
import { WhatsAppIcon } from '@/shared/ui/Icons/WhatsAppIcon/WhatsAppIcon'
import { MessangerLink } from '@/shared/ui/Link/MessangerLink/MessangerLink'
import Link from 'next/link'
import { useState } from 'react'
import './Menu.scss'

interface MenuProps {
	className?: string
}

export const Menu = ({ className }: MenuProps) => {
	const [menu, toggleMenu] = useState(false)

	const onToggle = () => {
		if (!menu) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		toggleMenu(!menu)
	}

	return (
		<div className={`navigation ${menu ? 'nav-active' : ''} f-c`}>
			<div className='nav-but-wrap' onClick={onToggle}>
				<div className='menu-icon hover-target'>
					<span className='menu-icon__line menu-icon__line-left'></span>
					<span className='menu-icon__line'></span>
					<span className='menu-icon__line menu-icon__line-right'></span>
				</div>
			</div>

			<nav className='nav'>
				<div className='nav__content'>
					<ul className='nav__list'>
						<li className='nav__list-item'>
							<Link href='/#quiz' onClick={onToggle}>
								Рассчитать стоимость
							</Link>
						</li>
						<li className='nav__list-item'>
							<Link href='/#cases' onClick={onToggle}>
								Кейсы
							</Link>
						</li>
						<li className='nav__list-item'>
							<Link href='/#advantages' onClick={onToggle}>
								Преимущества
							</Link>
						</li>
						<li className='nav__list-item'>
							<Link href='/#about' onClick={onToggle}>
								О нас
							</Link>
						</li>
						<li className='nav__list-item'>
							<Link href='/#promo' onClick={onToggle}>
								Акции
							</Link>
						</li>
						<li className='nav__list-item'>
							<Link href='/#contacts' onClick={onToggle}>
								Контакты
							</Link>
						</li>
						<li className='nav__list-item'>
							<Link href='tel:+79586678431'>+7 958 667-84-31</Link>
						</li>
						<li className='nav__list-item'>
							<Link href='mailto:info@d-okna.ru'>
								info@d-okna.ru
							</Link>
						</li>
						<li className='nav__list-item nav__list-item--messangers'>
							<MessangerLink
								to='https://wa.me/79586678431'
								className='f-c'
								icon={<WhatsAppIcon className='nav__list-icon' />}
							/>
							<MessangerLink
								to='https://t.me/79586678431'
								className='f-c'
								icon={<TelegramIcon className='nav__list-icon' />}
							/>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}
