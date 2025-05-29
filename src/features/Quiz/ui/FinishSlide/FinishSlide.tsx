import cls from './FinishSlide.module.scss'

// import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton/PrimaryButton'
import Bonus from '../Bonus/Bonus'
// import axios from 'axios'
import { Controller, useForm } from 'react-hook-form'
// import PhoneInput from 'react-phone-input-2'
import { Button } from '@/shared/ui/button'
interface FinishSlideProps {
	className?: string
	answers: any
}

export const FinishSlide = ({ className, answers }: FinishSlideProps) => {
	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			username: '',
			phone: '',
		},
	})

	const onSubmit = (data: any) => {
		const output = {
			...data,
			...answers,
		}
		console.log(output)
		// axios.post('/mail/calc.php', JSON.stringify(output)).then(res => {
		// 	reset()
		// })
	}

	return (
		<div className={`${className} ${cls.Finish}`}>
			<div className={cls.Left}>
				<div className={cls.Body}>
					<div className={cls.Header}>
						<p className={cls.Title}>
							Напишите свой контактный номер телефона, мы проанализируем данные
							и скоро с Вами свяжемся
						</p>
					</div>
					<p className={`${cls.BText} ${cls.BonusText}`}>Ваши бонусы</p>
					<div className={cls.BonusContainer}>
						<Bonus
							img='/img/quiz/bonus1.png'
							description='Дизайн проект'
							className={cls.Bonus}
						/>
						<Bonus
							img='/img/quiz/bonus3.png'
							description='Подарок'
							className={cls.Bonus}
						/>
					</div>
				</div>
				<div className={cls.Footer}>
					<div className={cls.ProgressWrapper}>
						<p className={cls.ProgressText}>
							Готово:
							<span className={cls.ProgressTextGold}> 95%</span>
						</p>
						<div className={cls.Progress}>
							<span
								className={cls.Fraction}
								style={{
									width: `95%`,
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={cls.Right}>
				<form onSubmit={handleSubmit(onSubmit)} className={cls.Form}>
					<div className={cls.Entity}>
						<label
							htmlFor='username'
							className={`${cls.BText} ${cls.InputLabel}`}
						>
							Ваше имя
						</label>
						<Controller
							name='username'
							control={control}
							render={({ field }) => (
								<input
									type='text'
									id='username'
									className={cls.Input}
									required
									{...field}
								/>
							)}
						/>
					</div>
					<div className={cls.Entity}>
						<label htmlFor='phone' className={`${cls.BText} ${cls.InputLabel}`}>
							Номер телефона
						</label>
						<Controller
							name='phone'
							control={control}
							render={({ field }) => (
								<input
									className={cls.Input}
								/>
							)}
						/>
					</div>
					<div className={cls.Policy}>
						<div className='checkbox-wrapper-23'>
							<input type='checkbox' checked id='check-23' />
							<label htmlFor='check-23' className={cls.PolicyLabel}>
								<svg viewBox='0,0,50,50'>
									<path d='M5 30 L 20 45 L 45 5'></path>
								</svg>
							</label>
						</div>

						{/* <input type='checkbox' name='policy' id='policy' /> */}
						<label>Согласен(а) на обработку персональных данных</label>
					</div>
					<Button
						type='submit'
					>
						Получить каталог, инструкцию и скидку
					</Button>
				</form>
			</div>
		</div>
	)
}
