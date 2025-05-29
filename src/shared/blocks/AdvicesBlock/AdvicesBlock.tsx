"use client"
import { useCtaModal } from '@/shared/context/cta-modal-context'
import { PrimaryButton } from '@/shared/ui/PrimaryButton/PrimaryButton'
import { ArrowRight } from 'lucide-react'
import s from './AdvicesBlock.module.scss'

export const AdvicesBlock = () => {
	const { setOpen } = useCtaModal()
	return(
		<section className={s.Section} id='advice'>		
			<div className={s.Wrapper}>
				<h2 className={s.Heading}>
				<span>10 полезных 
					<span className={s.Heading__accent}> добросоветов</span>
				</span>
				<br/>
				<span>
					Узнайте, как сделать классную кухню по доброй цене
				</span>
				</h2>
				<PrimaryButton onClick={() => setOpen('ADVICE')}>
					<span>Скачать советы PDF</span>
					<ArrowRight className='ml-2'/>
				</PrimaryButton>
			</div>
		</section>
	)
}
