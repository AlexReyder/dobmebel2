import s from './QuizTextAnswer.module.scss'

interface Props {
 choiceText: string
 checked: boolean
 setAnswer: (answer: string) => void
}

export const QuizTextAnswer = ({ choiceText, checked, setAnswer}: Props) => {
	return(
		<div className={s.Wrapper}>
			<input
				className={s.Checkbox}
				type='checkbox'
				id={choiceText}
				checked={checked}
				onChange={() => setAnswer(choiceText)}
			/>
			<label
				htmlFor={choiceText}
				className={s.Answer}
			>
				<span className={s.Round} />
				 <p className={s.Choice}>
					<span>{choiceText}</span>
					</p>
			</label>
		</div>
	)
}