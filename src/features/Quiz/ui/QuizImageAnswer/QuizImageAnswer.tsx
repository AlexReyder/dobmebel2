import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/shared/ui/tooltip"
import { BadgeCheck, CircleHelp } from 'lucide-react'
import s from './QuizImageAnswer.module.scss'

interface Props {
 imageUrl: string
 choiceText: string
 hint: string | null
 checked: boolean
 setAnswer: (answer: string) => void
}

export const QuizImageAnswer = ({imageUrl, choiceText, checked,hint, setAnswer}: Props) => {
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
				 <img src={imageUrl} alt={choiceText} className={s.Image} /> 
				 <p className={s.Choice}>
					<span>{choiceText}</span>
					{hint ? (
						 <TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<span>
									<CircleHelp className={s.CircleHelp}/>
								</span>
							</TooltipTrigger>
							<TooltipContent align='center' sideOffset={5} avoidCollisions={true} className={s.TooltipContent}>
								<span>{hint}</span>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					) : null}
					</p>
				 <span className={s.CheckBadge}>
					<BadgeCheck color={checked ? 'var(--c-p)' : 'var(--c-g)'} className={s.OkIcon}/>
				</span>
			</label>
		</div>
	)
}