import Image from 'next/image'
import Link from 'next/link'
import s from './Logo.module.scss'
 export const FooterLogo = () => (
	<Link className={s.Logo} href='/'>
		<Image src='/img/logo/logo-white.svg' alt='ГК Добрый' fill />
	</Link>
)

