import { cn } from '@/shared/utils/common'
import { useState } from 'react'
import Bonus from '../Bonus/Bonus'
import { AnswerObject } from '../Quiz'
import { QuizHeader } from '../QuizHeader/QuizHeader'
import { QuizImageAnswer } from '../QuizImageAnswer/QuizImageAnswer'
import { QuizNavigation } from '../QuizNavigation/QuizNavigation'
import { QuizProgress } from '../QuizProgress/QuizProgress'
import { QuizTextAnswer } from '../QuizTextAnswer/QuizTextAnswer'
import s from './MainSlides.module.scss'

type MainSlidesProps = {
	className?: string
	question: string
	description: string
	choices: string[]
	hints: string[] | null
	type: string
	imgURL: string[] | undefined
	handlePrev: () => void
	handleNext: (e: React.MouseEvent<HTMLButtonElement>) => void
	userAnswer?: AnswerObject | undefined
	questionNr: number
	totalQuestions?: number
}

export const MainSlides = ({
	className,
	question,
	description,
	choices,
	type,
	hints,
	imgURL,
	handlePrev,
	handleNext,
	userAnswer,
	questionNr,
	totalQuestions,
}: MainSlidesProps) => {
	const [answer, setAnswer] = useState('')
	const handleClean = (e: any) => {
		handleNext(e)
		setAnswer('')
	}

	return (
		<div className={className}>
			<div className={s.Left}>
				<div className={s.Body}>
					<QuizHeader questionNumber={questionNr} questionText={question}/>
					<div
						className={`${s.Answers} ${
							type === 'IA' ? s.ListIA : s.List
						}`}
					>
						{choices.map((choice, i) => (
							<>
								{
								type === 'IA' ? 
								(
									<QuizImageAnswer 
										key={choice + Math.random()}
										choiceText={choice } 
										setAnswer={setAnswer} 
										hint={hints ? hints[i] : null}
										imageUrl={imgURL![i]} 
										checked={answer === choice} 
									/>
								)
								 : 
								 (
										<QuizTextAnswer 
										key={choice + Math.random()}
										choiceText={choice} 
										setAnswer={setAnswer} 
										checked={answer === choice} 
										/>
								)
							}
							</>
						))}
					</div>
				</div>
				<div className={s.Footer}>
					<QuizNavigation handlePrev={handlePrev} handleNext={handleClean} currentValue={answer}/>
				 <QuizProgress questionNum={questionNr} currentAnswer = {answer}/>
				</div>
			</div>
			<div className={s.Right}>
					<figure className={s.Card}>
						<figcaption>
							<div className={s.Card__Avatar__Wrapper}>
								<img src='/img/quiz/person.webp' alt='Эксперт по кухням' className={s.Card__Avatar} />
								<div className={s.Card__AuthorData}>
									<cite className={s.Card__Author}>Илья Добрый</cite>
									<p className={s.Card__Job}>Эксперт по кухням</p>
								</div>
							</div>
					 </figcaption>
						<blockquote className={s.Card__Blockquote}>
							<p className={s.Card__Quote} dangerouslySetInnerHTML={{__html: description}}></p>
						</blockquote>
					</figure>
				<div className={s.BonusBlock}>
					<h3 className={s.BonusBlock__Text}>В конце вы получите:</h3>
					<Bonus img='/img/quiz/bonus1.png' description='Дизайн проект' className={cn(s.Bonus, s.BonusBlock__FirstBonus)}/>
					<Bonus
						img='/img/quiz/bonus3.png'
						description='Подарок'
						className={s.Bonus}
					/>
				</div>
			</div>
		</div>
	)
}
