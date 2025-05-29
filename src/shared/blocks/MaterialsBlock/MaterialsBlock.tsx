"use client"
import { Section } from '@/shared/ui/Section/Section'
import { DotButton, NextButton, PrevButton, useDotButton, usePrevNextButtons } from '@/shared/ui/SliderBtns/SliderBtns'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import { cn } from '@/shared/utils/common'
import useEmblaCarousel from 'embla-carousel-react'
import { CircleAlert } from 'lucide-react'
import s from './MaterialsBlock.module.scss'

export const MaterialsBlock = () => {
	const [emblaMainRef, emblaApi] = useEmblaCarousel({align: 'start'})
	const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
	const { selectedIndex, scrollSnaps, onDotButtonClick } =
			useDotButton(emblaApi)

	const facadeData = [
		{
			title: 'Массив дерева',
			description: 'Неповторимый природный узор и прочность натурального массива делает каждый гарнитур по-настоящему эксклюзивным и долговечным.',
			src: '/img/materials/image.jpg'
		},
		{
			title: 'МДФ Эмаль',
			description: 'Сияющая гладкая или трендовая рифленая поверхность, покрытая водоотталкивающей эмалью, выглядит эффектно и моется легко. ',
			src: '/img/materials/image.jpg'
		},
		{
			title: 'МДФ Eterno',
			description: 'Большой выбор дизайнов: от имитации натурального дерева, камня, песка или мрамора до ультраматовых покрытий, на которых не заметно бликов или отпечатков. ',
			src: '/img/materials/image.jpg'
		},
		{
			title: 'МДФ АГТ',
			description: 'Пластиковое покрытие повышенной прочности также может иметь разные текстуры: глянцевую, матовую, сатиновую или имитировать фактуру различных натуральных материалов, таких как дерево или камень.',
			src: '/img/materials/image.jpg'
		},
		{
			title: 'МДФ Пленка',
			description: 'Пленочное покрытие служит барьером для влаги, что особенно важно для кухонных фасадов, подверженных брызгам и паровой обработке.',
			src: '/img/materials/image.jpg'
		},
		{
			title: 'ЛДСП',
			description: 'Один из самых бюджетных вариантов фасадов, не уступает в прочности МДФ. Ламинированное покрытие защищает материал от механических воздействий, однако стоит быть осторожным с влажностью, так как при длительном контакте с водой ЛДСП может расслаиваться.',
			src: '/img/materials/image.jpg'
		},
	]

	const tabletopData = [
		{
			title: 'HPL-пластик',
			description: 'Очень практичный и современный материал, не впитывает влагу и очень устойчив к повреждениям. Ухаживать за ним очень просто, а стоимость такой столешницы приятно порадует.',
			src: '/img/materials/image.jpg'
		},
		{
			title: 'Столешница из искусственного камня',
			description: 'Это элегантный и функциональный элемент интерьера, хотя и не самый бюджетный.',
			src: '/img/materials/image.jpg'
		},
	]

	return(
		<Section className={s.Section} id='materials'>
			<h2 className={s.Heading}>
				<span className={s.Heading__bold}>Используем только</span>
				<br/>
				<span> проверенные материалы</span>
			</h2>
			<Tabs defaultValue="FACADE" className={s.Tabs}>
				  <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				<TabsList className={s.TabsList}>
        <TabsTrigger value="FACADE" className={s.TabsTrigger}>
					<p>Фасады</p>
				</TabsTrigger>
        <TabsTrigger value="TABLETOP" className={s.TabsTrigger}>
					<p>Столешницы</p>
				</TabsTrigger>
        <TabsTrigger value="FURNITURE" className={s.TabsTrigger}>
					<p>Фурнитура</p>
				</TabsTrigger>
      </TabsList>
			<TabsContent value='FACADE' className={s.TabsContent}>
			<div className={s.Info}>
				<CircleAlert className={s.Info__Icon}/>
					<p className={s.Info__Text}>Для фасадов кухни мы используем только <span className={s.Info__Text__Bold}>экологичные материалы</span>, которые не выделяют вредных веществ и безопасны для всей семьи. И МДФ, и ЛДСП, и натуральные материалы (дерево, камень) отличаются <span className={s.Info__Text__Bold}>высокой прочностью и влагостойкостью и прослужат вам в среднем 10-15 лет.</span> 
					</p>
			</div>
			<div className={s.Embla} ref={emblaMainRef}>
				<div className={s.Embla__Container}>
					{
						facadeData.map((item, i) =>(
							<figure className={cn(s.Card, s.Embla__Slide)} key={i}>
									<img src={item.src} alt={item.title} className={s.Card__Image}/>
									<figcaption className={s.Card__InfoBlock}>	
										<h3 className={s.Card__Title}>{item.title}</h3>
										<p className={s.Card__Description}>{item.description}</p>
									</figcaption>
							</figure>
							)
						)
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
			<TabsContent value='TABLETOP' className={s.TabsContent}>
				<div className={s.Info}>
					<CircleAlert className={s.Info__Icon}/>
						<p className={s.Info__Text}>Мы делаем столешницы толщиной: <span className={s.Info__Text__Bold}>26 мм и 38 мм</span> <br/>
Если у вас угловая или очень большая кухня, мы соединим несколько столешниц в единое целое методом скрытой стыковки – еврозапила. А еще поможем превратить часть столешницы в потрясающую барную стойку, где вы сможете наслаждаться утренним кофе или душевными посиделками с друзьями. 
						</p>
				</div>
					<div className={s.Embla} ref={emblaMainRef}>
						<div className={s.Embla__Container}>
								{
						tabletopData.map((item, i) =>(
						<figure className={cn(s.Card, s.Embla__Slide)} key={i}>
									<img src={item.src} alt={item.title} className={s.Card__Image}/>
									<figcaption className={s.Card__InfoBlock}>	
										<h3 className={s.Card__Title}>{item.title}</h3>
										<p className={s.Card__Description}>{item.description}</p>
									</figcaption>
							</figure>
							)
						)
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
			<TabsContent value='FURNITURE' className={s.TabsContent}>
						<div className={s.Info}>
					<CircleAlert className={s.Info__Icon}/>
						<p className={s.Info__Text}>80 раз в день открываются и закрываются ящики и двери на вашей кухне!<br/>
По-настоящему качественная фурнитура выдерживает ежедневную нагрузку и служит долгие годы без поломок и замены.<br/>
В работе мы используем качественную фурнитуру Hettich и Blum, а также бюджетный вариант Boyard. 

						</p>
				</div>
			</TabsContent>
			</Tabs>
		</Section>
	)
}
