import { Button } from '@/shared/ui/button'
import Bonus from '../Bonus/Bonus'
import cls from './StartSlide.module.scss'

interface StartSlideProps {
	className?: string
	start?: () => void
}

export const StartSlide = ({ className, start }: StartSlideProps) => {
	return (
		<div
			className={cls.Start}
			style={{
				backgroundImage: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 35%, rgba(0, 0, 0, 0.5) 100%), url(${'/img/quiz/about-img.jpg'})`,
			}}
		>
			<div className={cls.Wrapper}>
				<h1 className={cls.Heading}>
					<span style={{ marginBottom: '1rem' }}>
						Двери Гранит- по оптовым ценам со склада в Петербурге
					</span>{' '}
					<br />
					<span>
						Ответьте на 5 вопросов и получите: <br />
						<span className={cls.List}>
							{' '}
							<ul className={cls.HeadList}>
								<li className={cls.HeadItem}>Купон на скидку 10%</li>
								<li className={cls.HeadItem}>Каталог</li>
								<li className={cls.HeadItem}>
									<span>Инструкцию "Как отличить хорошую дверь"</span>
								</li>
							</ul>
						</span>
					</span>
				</h1>
				{/* <h2 className={cls.Subheading}>и дополнительную скидку до 10%</h2> */}
				{/* <PrimaryButton
					text='Получить каталог, инструкцию и скидку'
					onClick={start}
				/> */}
				<Button onClick={start}>Получить каталог, инструкцию и скидку</Button>
				<div className={cls.BonusWrapper}>
					<p className={cls.BonusText}>БОНУСЫ ПОСЛЕ ПРОХОЖДЕНИЯ ТЕСТА</p>
					<div className={cls.BonusContainer}>
						<Bonus img='/img/quiz/bonus1.png' description='Каталог' />
						<Bonus img='/img/quiz/bonus3.png' description='Инструкция' />
					</div>
				</div>
			</div>
		</div>
	)
}
