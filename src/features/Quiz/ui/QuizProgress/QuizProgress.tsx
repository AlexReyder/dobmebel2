import s from './QuizProgress.module.scss'

interface Props{
 questionNum: number
 currentAnswer: string
}

export const QuizProgress = ({questionNum, currentAnswer}: Props) => {
	console.log(questionNum)
	return (
	 <div className={s.ProgressWrapper}>
			<p className={s.ProgressText}>
				Готово:
				<span className={s.ProgressTextGold}> {questionNum === 5  && currentAnswer ? 95 : Math.round(questionNum! * 16.6666666667)}%</span>
			</p>
			<div className={s.Progress}>
					<span
					 className={s.Fraction}
					 style={{
									width: `calc(16.6666666667% * ${
										questionNum === 0 ? -1 : questionNum
									})`,
								}}
					/>
			</div>
	 </div>
	)
}