"use client"
import { TestimonialType } from '@/shared/types/validation/testimonials'
import { Section } from '@/shared/ui/Section/Section'
import { DotButton, NextButton, PrevButton, useDotButton, usePrevNextButtons } from '@/shared/ui/SliderBtns/SliderBtns'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import { cn } from '@/shared/utils/common'
import Avvvatars from 'avvvatars-react'
import useEmblaCarousel from 'embla-carousel-react'
import { ExternalLink, Quote } from 'lucide-react'
import Link from 'next/link'
import s from './TestimonialsBlock.module.scss'

interface Props{
data: TestimonialType[]
}

export const TestimonialsBlock = ({data}: Props) => {
	const [emblaMainRef, emblaApi] = useEmblaCarousel({align: 'start'})
	const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
	const { selectedIndex, scrollSnaps, onDotButtonClick } =
			useDotButton(emblaApi)
	const yandexTestimonials = data.filter((item) => item.type === 'YANDEX')
	const gisTestimonials = data.filter((item) => item.type === 'GIS')

	return(
		<Section className={s.Section} id='testimonials'>
			<h2 className={s.Heading}>
				<span className={s.Heading__bold}>Отзывы</span>
				<span> наших клиентов</span>
			</h2>
			<Tabs defaultValue="YANDEX" className={s.Tabs}>
				  <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				<TabsList className={s.TabsList}>
        <TabsTrigger value="YANDEX" className={s.TabsTrigger}>
					<img src="/img/testimonials/ya.svg" alt="Яндекс отзывы"  className={s.TabsIcon}/>
				</TabsTrigger>
        <TabsTrigger value="GIS" className={s.TabsTrigger}>
						<img src="/img/testimonials/2gis.svg" alt="Яндекс отзывы"  className={s.TabsIcon}/>
				</TabsTrigger>
      </TabsList>
			<TabsContent value='YANDEX' className={s.TabsContent}>
			<div className={s.Embla} ref={emblaMainRef}>
				<div className={s.Embla__Container}>
					{
						yandexTestimonials.map((item, i) => {
							const authorLetters = item.author.split(' ').filter((el)=> el !== '') 
							let avatarValue = ''
							if(authorLetters.length > 0){
								authorLetters.forEach((item) => {
									avatarValue+= item[0].toLocaleUpperCase()
								}) 
							} else {
								avatarValue = item.author[0].toLocaleUpperCase()
							}
							return (
							<figure className={cn(s.Card, s.Embla__Slide)} key={i}>
									<blockquote>
											<Quote className={s.Card__Icon} fill='var(--c-g)'/>
											<p className={s.Card__Quote}>{item.quote}</p>
									</blockquote>
									<figcaption>
									<div className={s.Card__Avatar__Wrapper}>
									 <Avvvatars value={avatarValue}/>
										<cite className={s.Card__Author}>{item.author}</cite>
									</div>
									<Link href='https://yandex.ru/maps/-/CHCsf0zU' target='_blank'  className={s.Card__Link}>
										<span>Посмотреть отзывы на Яндексе</span>
										<ExternalLink/>
									</Link>
									</figcaption>
							</figure>
							)
						})
					}
				</div>
			</div>
			 <div className={s.EmblaDots}>
												{scrollSnaps.map((_, index) => (
													<DotButton
														key={index}
														onClick={() => onDotButtonClick(index)}
														className={cn(s.EmblaDot, index === selectedIndex ? s.EmblaDot__Selected : '')}
													/>
												))}
				</div>
			</TabsContent>
			<TabsContent value='GIS' className={s.TabsContent}>
					<div className={s.Embla} ref={emblaMainRef}>
						<div className={s.Embla__Container}>
							{
							gisTestimonials.map((item, i) => {
								const authorLetters = item.author.split(' ').filter((el)=> el !== '') 
									let avatarValue = ''
									if(authorLetters.length > 0){
										authorLetters.forEach((item) => {
											avatarValue+= item[0].toLocaleUpperCase()
										}) 
									} else {
										avatarValue = item.author[0].toLocaleUpperCase()
									}
								return(
									<figure className={cn(s.Card, s.Embla__Slide)} key={i}>
											<blockquote>
													<Quote className={s.Card__Icon} fill='var(--c-g)'/>
													<p className={s.Card__Quote}>{item.quote}</p>
											</blockquote>
											<figcaption>
											<div className={s.Card__Avatar__Wrapper}>
											<Avvvatars value={avatarValue} />
												<cite className={s.Card__Author}>{item.author}</cite>
											</div>
											<Link href='https://go.2gis.com/VCnkF' target='_blank' className={s.Card__Link}>
												<span>Посмотреть отзывы на 2ГИС</span>
												<ExternalLink/>
											</Link>
											</figcaption>
							</figure>
								)
							})
							}
						</div>
					</div>
				<div className={s.EmblaDots}>
												{scrollSnaps.map((_, index) => (
													<DotButton
														key={index}
														onClick={() => onDotButtonClick(index)}
														className={cn(s.EmblaDot, index === selectedIndex ? s.EmblaDot__Selected : '')}
													/>
												))}
				</div>
			</TabsContent>
			</Tabs>
				<div className={s.embla__controls}>
        
			</div>
		</Section>
	)
}
