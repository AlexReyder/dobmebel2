"use client"
import { AboutBlock } from '@/shared/blocks/AboutBlock/AboutBlock'
import { AdvicesBlock } from '@/shared/blocks/AdvicesBlock/AdvicesBlock'
import { CallDesignerBlock } from '@/shared/blocks/CallDesignerBlock/CallDesignerBlock'
import { CallMeasurerBlock } from '@/shared/blocks/CallMesaurerBlock/CallMesaurerBlock'
import { CasesBlock } from '@/shared/blocks/CasesBlock/CasesBlock'
import { ContactsBlock } from '@/shared/blocks/ContactsBlock/ContactsBlock'
import { FooterBlock } from '@/shared/blocks/FooterBlock/FooterBlock'
import { HeroBlock } from '@/shared/blocks/HeroBlock/HeroBlock'
import { KitchenAdvantagesBlock } from '@/shared/blocks/KitchenAdvantagesBlock/KitchenAdvantagesBlock'
import { MakeKindBlock } from '@/shared/blocks/MakeKindBlock/MakeKindBlock'
import { MaterialsBlock } from '@/shared/blocks/MaterialsBlock/MaterialsBlock'
import { PromoBlock } from '@/shared/blocks/PromoBlock/PromoBlock'
import { QuizBlock } from '@/shared/blocks/QuizBlock/QuizBlock'
import { TestimonialsBlock } from '@/shared/blocks/TestimonialsBlock/TestimonialsBlock'
import CtaModalProvider from '@/shared/context/cta-modal-context'
import { Header } from '@/widgets/Header'

export const MainPageTemplate = ({data}: {data?:any}) => {
	return(
			<CtaModalProvider>
				<Header/>
				<HeroBlock/>
				<QuizBlock/>
				<CasesBlock data={data.cases} />
				<MaterialsBlock/>
				<CallDesignerBlock/>
				<MakeKindBlock/>
				<KitchenAdvantagesBlock/>
				<AdvicesBlock/>
				<AboutBlock/>
				<PromoBlock data={data.promos}/>
				<TestimonialsBlock data={data.testimonials}/>
				<CallMeasurerBlock/>
				<ContactsBlock/>
				<FooterBlock/>
			</CtaModalProvider>
	)
}