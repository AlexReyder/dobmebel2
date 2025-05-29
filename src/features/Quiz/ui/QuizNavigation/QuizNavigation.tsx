import { Button } from '@/shared/ui/button'
import { ArrowLeft } from 'lucide-react'
import s from './QuizNavigation.module.scss'

interface Props{
 handlePrev: () => void
 handleNext: (e: any ) => void
 currentValue: string
}

export const QuizNavigation = ({handlePrev, handleNext, currentValue}: Props) => {
	return (
	<div className={s.Navigation}>
			<Button variant="ghost" onClick={handlePrev} className={s.PrevBtn}>
				 <ArrowLeft/>
			</Button>
			<Button
				className={s.NextBtn}
				onClick={handleNext}
				value={currentValue}
			>
				Далее
			</Button>
	</div>
	)
}