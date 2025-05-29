import { PrimaryLink } from '@/shared/ui/PrimaryLink/PrimaryLink'
import { Section } from '@/shared/ui/Section/Section'
import Marquee from 'react-fast-marquee'
import s from './AboutBlock.module.scss'

export const AboutBlock = () => {

	return(
		<Section className={s.Section} id='about'>
			<h2 className={s.Heading}>
				<span className={s.Heading__bold}>Мы —</span>
				<span className={s.Heading__bold}>
					<span className={s.Heading__accent}> Добрые</span>
				</span>
			</h2>
			<div className={s.Wrapper}>
				 <article className={s.Article}>
					<p>
						Группа компаний <span className={s.TextBold}>ДОБРЫЕ</span> специализируется на производстве надежных окон и стильной мебели для розничных и корпоративных клиентов. Каждый проект для нас – это возможность воплотить
						в жизнь ваши мечты о красивом и функциональном пространстве. Уже почти 10 лет мы не просто делаем мебель и окна – мы создаем атмосферу, в которой хочется жить и работать!
					</p>
					<div className={s.Links}>
						<PrimaryLink href='https://gk-dobrye.ru/' target="_blank" className={s.Link}>
						Посмотреть Добрые окна
						</PrimaryLink>
						<PrimaryLink href='https://dobmebel.ru/' target="_blank" className={s.Link}>
						Посмотреть Добрую мебель
						</PrimaryLink>
					</div>
				 </article>
					<div className={s.LogoBox}>
							<img
								src='img/logo/logo-about.png'
								alt='Добрые кухни на заказ'
								className={s.Logo}
							/>
					</div>
			</div>
			<Marquee className={s.Marquee}>
				<div className={s.PartnersWrapper}>
					<img
						src='img/partners/Blum.svg'
						alt='Наш партнер Blum'
						className={s.Partners}
					/>
				</div>
				<div className={s.PartnersWrapper}>
					<img
						src='img/partners/Boyard.svg'
						alt='Наш партнер Boyard'
						className={s.Partners}
					/>
				</div>
				<div className={s.PartnersWrapper}>
					<img
						src='img/partners/Egger.svg'
						alt='Наш партнер Egger'
						className={s.Partners}
					/>
				</div>
				<div className={s.PartnersWrapper}>
					<img
						src='img/partners/Eterno.png'
						alt='Наш партнер Eterno'
						className={s.Partners}
					/>
				</div>
				<div className={s.PartnersWrapper}>
					<img
						src='img/partners/Firmax.svg'
						alt='Наш партнер Firmax'
						className={s.Partners}
					/>
				</div>
				<div className={s.PartnersWrapper}>
					<img
						src='img/partners/Hettich.svg'
						alt='Наш партнер Hettich'
						className={s.Partners}
					/>
				</div>
				<div className={s.PartnersWrapper}>
					<img
						src='img/partners/Lamarty.svg'
						alt='Наш партнер Lamarty'
						className={s.Partners}
					/>
				</div>
				<div className={s.PartnersWrapper}>
					<img
						src='img/partners/Makmart.svg'
						alt='Наш партнер Makmart'
						className={s.Partners}
					/>
				</div>
				<div className={s.PartnersWrapper}>
					<img
						src='img/partners/Slotex.svg'
						alt='Наш партнер Slotex'
						className={s.Partners}
					/>
				</div>
				<div className={s.PartnersWrapper}>
					<img
						src='img/partners/Увадрев-Холдинг.png'
						alt='Наш партнер Увадрев Холдинг'
						className={s.Partners}
					/>
				</div>
			</Marquee>
		</Section>
	)
}
