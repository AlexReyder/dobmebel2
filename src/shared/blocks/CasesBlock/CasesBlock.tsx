"use client"
import { CasesType } from '@/shared/types/validation/cases'
import { PrimaryButton } from '@/shared/ui/PrimaryButton/PrimaryButton'
import { Section } from '@/shared/ui/Section/Section'
import { DotButton, NextButton, PrevButton, useDotButton, usePrevNextButtons } from '@/shared/ui/SliderBtns/SliderBtns'
import { cn } from '@/shared/utils/common'
import useEmblaCarousel from 'embla-carousel-react'
import { Clock, Component, MoveVertical, Ruler, ShieldCheck } from 'lucide-react'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import s from './CasesBlock.module.scss'

interface Props{
	data: CasesType[]
}

export const CasesBlock = ({data}: Props) => {
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
		<Section className={s.Section} id='cases'>
			<h2 className={s.Heading}>
				<span>Гордимся и показываем всем:</span>
				<span className={s.Heading__bold}>1000+ реализованных
					<span className={s.Heading__accent}> добро-кейсов</span>
				</span>
			</h2>

			<div className={s.Wrapper}>
				 <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
				 <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
					<div className={s.Embla} ref={emblaMainRef}>
							<div className={s.Embla__Container}>
								{
									data.map((item: any) => (
									<div className={cn(s.Case, s.Embla__Slide)} key={item.title}>
										<div className={s.Case__ImageBlock}>
											<Gallery>
											{item.images["black"].overviews.map((el: any, i: any) =>(
													<Item
															key={item.images["black"]["originals"][i].url}
															original={item.images["black"]["originals"][i].url}
															thumbnail={item.images["black"]["thumbnails"][i].url}
															width={item.images["black"]["originals"][i].dimension.width}
															height={item.images["black"]["originals"][i].dimension.height}
																						>   
															{({ ref, open }) => (
															<img 
																src={el.url}
																alt={item.title}
																className={cn(s.Overview, i >= 1 ? s.NotOverview : '')}
																onClick={open}
																ref={ref}
																/>
															)}
														</Item>
											
											))}
											</Gallery>
											<div className={s.Thumbnails}>
												<Gallery>
												{item.images["black"].thumbnails.map((el: any, i: any) =>(
													<div className={cn(s.Thumbnail, i > 4 ? s.ThumbnailLimit : '')} key={item.images["black"]["originals"][i].url}>
														<Item
															original={item.images["black"]["originals"][i].url}
															thumbnail={item.images["black"]["thumbnails"][i].url}
															width={item.images["black"]["originals"][i].dimension.width}
															height={item.images["black"]["originals"][i].dimension.height}
																						>   
															{({ ref, open }) => (
																<img src={el.url} alt={`${item.title}  #${i}`}
																		onClick={open}
																		ref={ref}
																/>
															)}
														</Item>
												</div>
												))}
												</Gallery>
											</div>
										</div>
										<div className={s.Case__TextBlock}>
											<p className={s.Case__Heading}>{item.title}</p>
											<p className={s.Case__Subheading}>{item.subtitle}</p>
											<ul className={s.List}>
												<li className={s.Item}>
													<Clock size={24} color='var(--c-p)'/>
													<p className={s.Item__Title}>
														<span className={s.Item__Title__Bold}>Срок изготовления: </span>
														<span>{item.prodtime}</span>
														</p>
												</li>
												<li className={s.Item}>
													<Component size={24} color='var(--c-p)'/>
													<p className={s.Item__Title}>
														<span className={s.Item__Title__Bold}>Стиль кухни: </span>
														<span>{item.style}</span>
														</p>
												</li>
												<li className={s.Item}>
													<ShieldCheck size={24} color='var(--c-p)'/>
													<p className={s.Item__Title}>
														<span className={s.Item__Title__Bold}>Гарантия: </span>
														<span>{item.guarantee}</span>
														</p>
												</li>
												<li className={s.Item}>
													<Ruler size={24} color='var(--c-p)'/>
													<p className={s.Item__Title}>
														<span className={s.Item__Title__Bold}>Размеры: </span>
														<span>{item.sizes}</span>
														</p>
												</li>
												<li className={s.Item}>
													<MoveVertical size={24} color='var(--c-p)'/>
													<p className={s.Item__Title}>
														<span className={s.Item__Title__Bold}>Высота: </span>
														<span>{item.height}</span>
														</p>
												</li>
												<li className={s.Item}>
													<p className={cn(s.Item__Title, s.Item__NoIcon)}>
														<span className={s.Item__Title__Bold}>Фасады: </span>
														<span>{item.facade}</span>
														</p>
												</li>
												<li className={s.Item}>
													<p className={cn(s.Item__Title, s.Item__NoIcon)}>
														<span className={s.Item__Title__Bold}>Фурнитура: </span>
														<span>{item.furniture}</span>
														</p>
												</li>
												<li className={s.Item}>
													<p className={cn(s.Item__Title, s.Item__NoIcon)}>
														<span className={s.Item__Title__Bold}>Ручка-профиль: </span>
														<span>{item.profile}</span>
														</p>
												</li>
												<li className={s.Item}>
													<p className={cn(s.Item__Title, s.Item__NoIcon)}>
														<span className={s.Item__Title__Bold}>Стоимость: </span>
														<span>{item.price}</span>
														<span style={{color:'var(--c-p)'}}> ₽</span>
														</p>
												</li>
											</ul>
											<PrimaryButton className={s.Button}>Хочу также</PrimaryButton>
										</div>
									</div>
							
									))
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
			</div>
		</Section>
	)
}
