import s from './QuizHeader.module.scss'

interface Props {
 questionNumber: number
 questionText: string
}

export const QuizHeader = ({questionNumber, questionText}: Props) => {
	return(
		<div className={s.Wrapper}>
			<p className={s.QNumber}>Вопрос {questionNumber + 1}</p>
			<h2 className={s.QText}>{questionText}</h2>
		</div>
	)
}