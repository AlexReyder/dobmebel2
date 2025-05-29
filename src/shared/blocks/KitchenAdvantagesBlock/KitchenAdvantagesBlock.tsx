import { Section } from '@/shared/ui/Section/Section'
import s from './KitchenAdvantagesBlock.module.scss'

export const KitchenAdvantagesBlock = () => {
	const data = [
		{
			title: 'ВОДОСТОЙКИЕ ФАСАДЫ',
			description: `+5 лет сверх обычного срока прослужит добрая кухня, ведь фасады из МДФ "не боятся" горячего пара и тепла.`,
			src: '/img/make-kind/1.jpeg',
			icon: '/img/advantages/waterproof.svg'
		},
		{
			title: 'КРОМЛЕНИЕ PUR-ОМ',
			description: `ЛДСП и МДФ-плиты обработаны по специальной технологии, которая создает эффект монолитной плиты "без стыков" и обеспечивает максимальную прочность и влагостойкость.`,
			src: '/img/make-kind/1.jpeg',
			icon: '/img/advantages/joints.svg'
		},
		{
			title: 'ФУРНИТУРА HETICH И BLUM',
			description: '200 000+ плавных и бесшумных открываний и 15 лет срока службы.',
			src: '/img/make-kind/1.jpeg',
			icon: '/img/advantages/kitchen.svg'
		},
		{
			title: 'ЭКО-МАТЕРИАЛЫ',
			description: 'Мы используем только экологичные материалы с нулевым или минимальным классом эмиссии. Никаких вредных веществ и формальдегидов на вашей кухне!',
			src: '/img/make-kind/1.jpeg',
			icon: '/img/advantages/eco.svg'
		},
	]
	return(
		<Section className={s.Section}>
			<div className={s.Wrapper}>
				{
					data.map((item, i) => (
					<div className={s.Card} key={i}>
								<p className={s.Decorative}>0{i + 1}</p>
								<div className={s.Card__Image__Wrapper}>
									<img src={item.src} alt={item.title} className={s.Card__Image} />
								</div>
								<div className={s.Card__Info}>
										<img src={item.icon} alt={item.title} className={s.Card__Info__Icon} />
									<p className={s.Card__Title}>{item.title}</p>
									<p className={s.Card__Description}>{item.description}</p>
								</div>
					</div>
					))
				}
			</div>
		</Section>
	)
}