import { PrimaryLink } from '@/shared/ui/PrimaryLink/PrimaryLink'
import { Section } from '@/shared/ui/Section/Section'
import { cn } from '@/shared/utils/common'
import { BadgeCheck } from 'lucide-react'
import s from './MakeKindBlock.module.scss'

export const MakeKindBlock = () => {
	const data = [
		{
			title: 'Безопасность.',
			description: 'Экологичные материалы, рекомендованные даже для детсадов и медучреждений.',
			src: '/img/make-kind/1.jpeg',
		},
		{
			title: 'Эргономичность.',
			description: 'Все на своем месте и всегда под рукой!',
			src: '/img/make-kind/1.jpeg',
		},
		{
			title: 'Вместительность.',
			description: 'Точно поместится вся необходимая мебель и техника!',
			src: '/img/make-kind/1.jpeg',
		},
		{
			title: 'Освещение.',
			description: 'Эффектная подсветка и комфорт для глаз.',
			src: '/img/make-kind/1.jpeg',
		},
		{
			title: 'Функциональность',
			description: 'Встроенная техника точно по размерам кухни.',
			src: '/img/make-kind/1.jpeg',
		},
	]
	return(
		<Section className={s.Section} id='advantages'>
			<h2 className={s.Heading}>
				<span >Сделаем вашу кухню</span>
				<span className={s.Heading__bold}>по-настоящему
					<span className={s.Heading__accent}> доброй</span>
				</span>
			</h2>
			<div className={s.Wrapper}>
				{
					data.map((item, i) => (
					<div className={s.Card} key={i}>
								<div className={s.Card__Image__Wrapper}>
									<img src={item.src} alt={item.title} className={s.Card__Image} />
									<div className={s.Card__Icon__Wrapper}>
										<BadgeCheck className={s.Card__Icon}/>
									</div>
								</div>
								<p className={s.Card__Title}>{item.title}</p>
								<p className={s.Card__Description}>{item.description}</p>
					</div>
					))
				}
				<div className={cn(s.Card, s.CardSpecial)}>
								<div className={s.Card__Image__Wrapper}>
								</div>
								<p className={s.Card__Title}>Честная стоимость.</p>
								<p className={s.Card__Description}>Проведем бесплатный замер и не изменим цены до окончания работ по договору без согласования.</p>
								<PrimaryLink className={s.Button} href='/#quiz'>
													<span>Рассчитать стоимость</span>
												</PrimaryLink>
					</div>
			</div>
		</Section>
	)
}