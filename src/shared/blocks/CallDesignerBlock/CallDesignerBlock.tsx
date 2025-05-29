"use client"
import { useCtaModal } from '@/shared/context/cta-modal-context'
import { PrimaryButton } from '@/shared/ui/PrimaryButton/PrimaryButton'
import { Section } from '@/shared/ui/Section/Section'
import { cn } from '@/shared/utils/common'
import s from './CallDesignerBlock.module.scss'

export const CallDesignerBlock = () => {
	const { setOpen } = useCtaModal()
	return(
		<Section className={s.Section}>
			<div className={s.Wrapper}>
				<div className={s.Left}>
					<h2 className={s.Heading}>
						<span className={s.Heading__Bold}>1000 + вариантов трендовых фактур и цветов для создания </span>
						<span className={cn(s.Heading__Bold, s.Heading__Accent)}>интерьера вашей мечты!</span>
					</h2>	
					<p className={s.Subheading}>Отправьте заявку на расчет – и получите дизайн-проект кухни в подарок!</p>
					<div className={s.Button}>
						<PrimaryButton onClick={() => setOpen('DESIGNER')}>
							<span>Получить дизайн проект</span>
						</PrimaryButton>
					</div>
				</div> 
			</div>
		</Section>
	)
}
