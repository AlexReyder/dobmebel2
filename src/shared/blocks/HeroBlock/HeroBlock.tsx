"use client"
import { useCtaModal } from '@/shared/context/cta-modal-context'
import { PrimaryLink } from '@/shared/ui/PrimaryLink/PrimaryLink'
import { Section } from '@/shared/ui/Section/Section'
import { CarIcon, CircleAlert, PenIcon, Ruler } from 'lucide-react'
import s from './HeroBlock.module.scss'

export const HeroBlock = () => {
	const { setOpen } = useCtaModal()
	return(
		<Section className={s.Section}>
				<video
					autoPlay
					loop
					muted
					className={s.VideoBg}
					poster='/video/bg.jpg'
				>
					<source src='/video/bg.mp4' />
				</video>
				<div
					className={s.Overlay}
					style={{ backgroundImage: `url(/img/bgs/overlay.png)` }}
				></div>		
			<div className={s.Wrapper}>
				<h1 className={s.Heading}>
					<span className={s.Heading__Accent}>Добрая</span> мебель на заказ <br/>за 14 дней!</h1>
				<h2 className={s.Subheading}>Ответьте на несколько вопросов и получите 30% скидку на кухни</h2>
				<PrimaryLink className={s.Button} href='/#quiz'>
					<span>Рассчитать стоимость</span>
				</PrimaryLink>
			</div>

			<div className={s.Badge}>
				<div className={s.Badge__Left}>
					<CircleAlert className={s.Badge__Left__Icon} />
					<p className={s.Badge__Left__Text}>Бесплатно</p>
				</div>
				<div className={s.Badge__Right}>
						<ul className={s.Badge__List}>
							<li className={s.Badge__Item}>
								<p className={s.Badge__Item__Job}>Дизайн</p>
								<p className={s.Badge__Item__Price}>2000</p>
								<PenIcon className={s.Badge__Item__Icon}/>
							</li>
								<li className={s.Badge__Item}>
								<p className={s.Badge__Item__Job}>Замер</p>
								<p className={s.Badge__Item__Price}>1500</p>
								<Ruler className={s.Badge__Item__Icon}/>
							</li>
								<li className={s.Badge__Item}>
								<p className={s.Badge__Item__Job}>Доставка</p>
								<p className={s.Badge__Item__Price}>1000</p>
								<CarIcon className={s.Badge__Item__Icon}/>
							</li>
						</ul>
				</div>
			</div>
		</Section>
	)
}
