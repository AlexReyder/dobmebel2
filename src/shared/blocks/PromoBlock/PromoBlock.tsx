"use client"
import { PromoType } from '@/shared/types/validation/promo'
import { Section } from '@/shared/ui/Section/Section'
import { DotButton, NextButton, PrevButton, useDotButton, usePrevNextButtons } from '@/shared/ui/SliderBtns/SliderBtns'
import { cn } from '@/shared/utils/common'
import useEmblaCarousel from 'embla-carousel-react'
import s from './PromoBlock.module.scss'

interface Props {
	data: PromoType[]
}

export const PromoBlock = ({data}: Props) => {
	const [emblaMainRef, emblaApi] = useEmblaCarousel({align: 'start'})
	const {
			prevBtnDisabled,
			nextBtnDisabled,
			onPrevButtonClick,
			onNextButtonClick
		} = usePrevNextButtons(emblaApi)
	const { selectedIndex, scrollSnaps, onDotButtonClick } =
				useDotButton(emblaApi)	
	return(
		<Section className={s.Section} id='promo'>
			<h2 className={s.Heading}>
				<span className={s.Heading__bold}>Акции и спецпредложения</span>
			</h2>
			 <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
			 <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
			<div className={s.Embla} ref={emblaMainRef}>
				<div className={s.Embla__Container}>
					{
						data.map((item, i) => (
						<div style={{
							backgroundImage: `url(${item.background})`
						}} className={s.Promo}>
								<img src={item.background} alt="" />
						</div>	
						))
					}
				</div>
			</div>
			<div className={s.EmblaDots}>
															{data.map((_, index) => (
																<DotButton
																	key={index}
																	onClick={() => onDotButtonClick(index)}
																	className={cn(s.EmblaDot, index === selectedIndex ? s.EmblaDot__Selected : '')}
																/>
															))}
							</div>
		</Section>
	)
}