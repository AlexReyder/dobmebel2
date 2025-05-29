"use client"
import { Quiz } from '@/features/Quiz'
import { quizData } from '@/shared/constants/data-quiz'
import { Section } from '@/shared/ui/Section/Section'
import s from './QuizBlock.module.scss'

export const QuizBlock = () => {

	return(
		<Section className={s.Section} id='quiz'>
			<h2 className={s.Heading}>
				<span className={s.Heading__bold}>Узнайте стоимость вашей
					<span className={s.Heading__accent}> доброй </span>
					кухни
				</span>
			</h2>
			<Quiz data={quizData} />
		</Section>
	)
}