"use client"
import { DzenIcon } from '@/shared/ui/Icons/DzenIcon/DzenIcon'
import { TelegramIcon } from '@/shared/ui/Icons/TelegramIcon/TelegramIcon'
import { VkIcon } from '@/shared/ui/Icons/VkIcon/VkIcon'
import { WhatsAppIcon } from '@/shared/ui/Icons/WhatsAppIcon/WhatsAppIcon'
import { MessangerLink } from '@/shared/ui/Link/MessangerLink/MessangerLink'
import { Section } from '@/shared/ui/Section/Section'
import { cn } from '@/shared/utils/common'
import Link from 'next/link'
import s from './ContactsBlock.module.scss'

export const ContactsBlock = () => {

	return(
		<Section className={s.Section} id='contacts'>
			<h2 className={s.Heading}>
				<span className={s.Heading__bold}>Свяжитесь с нами</span>
				<span> удобным способом</span>
			</h2>
			<h3 className={s.Subheading}>
				<span className={s.Subheading__bold}>Быстро ответим.</span>
				<span> Наш менеджер подробно сориетирует вас по вариантам, срокам и стоимости.</span>
			</h3>
			<div className={s.Wrapper}>
				<div className={s.Contacts}>
					<div className={s.ContactEntity}>
					<p className={s.ContactEntity__Name}>Номер телефона</p>
					<Link href='tel:+79586678431' className={s.ContactEntity__Value}>
					+7 958 667-84-31
					</Link>
				</div>
				<div className={s.ContactEntity}>
					<p className={s.ContactEntity__Name}>Электронная почта</p>
					<Link href='mailto:info@d-okna.ru' className={s.ContactEntity__Value}>
					info@d-okna.ru
					</Link>
				</div>
				<div className={s.ContactEntity}>
					<p className={s.ContactEntity__Name}>Мессенджеры</p>
					<div className={s.ContactEntity__Flex}>
						<MessangerLink
							to='https://wa.me/79586678431'
							className='f-c'
							icon={<WhatsAppIcon className='nav__list-icon' />}
						/>
						<MessangerLink
							to='https://t.me/+79586678431'
							className='f-c'
							icon={<TelegramIcon className='nav__list-icon' />}
						/>
					</div>
				</div>
				<div className={s.ContactEntity}>
					<p className={s.ContactEntity__Name}>Адрес офиса</p>
					<p className={s.ContactEntity__Value}>г. Самара, ул.Молодежная, 2, офис 301</p>
				</div>
				<div className={s.ContactEntity}>
					<p className={s.ContactEntity__Name}>Часы работы</p>
					<p className={cn(s.ContactEntity__Value, s.ContactEntity__Hours)}>Пн-Пт 9:00 - 19:00</p>
					<p className={cn(s.ContactEntity__Value, s.ContactEntity__Hours)}>Сб 10:00 - 15:00</p>
				</div>
				<div className={s.ContactEntity}>
					<p className={s.ContactEntity__Name}>Следите за новостями</p>
					<div className={s.ContactEntity__Flex}>
						<MessangerLink
							to='https://vk.com/gkdobrayamebel'
							className='f-c'
							icon={<VkIcon className='nav__list-icon' />}
						/>
						<MessangerLink
							to='https://t.me/dobmebel'
							className='f-c'
							icon={<TelegramIcon className='nav__list-icon' />}
						/>
						<MessangerLink
							to='https://dzen.ru/id/6829ac65e985e21f85b6f5d1'
							className='f-c'
							icon={<DzenIcon className='nav__list-icon' />}
						/>
					</div>
				</div>
				</div>
				<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A46b43b8aaa64f4c9cfd157a5835d04fe0b54f618a78d7a72e36e4fa176397d8d&amp;source=constructor" width='100%'
				height='100%' className={s.Map}></iframe>
			</div>
		</Section>
	)
}
