"use client"
import { useCtaModal } from '@/shared/context/cta-modal-context'
import { CheckBadge } from '@/shared/ui/CheckBadge/CheckBadge'
import { PrimaryButton } from '@/shared/ui/PrimaryButton/PrimaryButton'
import { Section } from '@/shared/ui/Section/Section'
import { cn } from '@/shared/utils/common'
import s from './CallMesaurerBlock.module.scss'

export const CallMeasurerBlock = () => {
	const { setOpen } = useCtaModal()
	return(
		<Section className={s.Section}>
			<div className={s.Wrapper}>
				<div className={s.Left}>
					<h2 className={s.Heading}>
						<span className={s.Heading__Bold}>Запишитесь на бесплатный замер </span> до конца месяца, чтобы <span className={cn(s.Heading__Bold, s.Heading__Accent)}>получить 30% скидку!</span>
					</h2>	
					<ul className={s.List}>
						<li className={s.Item}>
							<CheckBadge/>
							<p className={s.Item__Text}>Подбор материалов и фурнитуры</p>
						</li>
						<li className={s.Item}>
							<CheckBadge/>
							<p className={s.Item__Text}>Расчет стоимости кухни</p>
						</li>
						<li className={s.Item}>
							<CheckBadge/>
							<p className={s.Item__Text}>Дизайн-проект в 3D</p>
						</li>
					</ul>
					<div className={s.Button}>
						<PrimaryButton onClick={() => setOpen('MEASURER')}>
						Записаться на замер
					</PrimaryButton>
					</div>
				</div> 
			</div>
		</Section>
	)
}
