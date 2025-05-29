import { isProtected } from '@/shared/actions/auth'
import { handleGetAllTestimonials } from '@/shared/actions/testimonials'
import { TestimonialDbValidate } from '@/shared/types/validation/testimonials'
import { testimonialColumns } from '@/shared/ui/DataTable/columns/testimonial-columns'
import { TestimonialDialogs } from '@/shared/ui/DataTable/dialogs/testimonial-dialogs/testimonial-dialogs'
import { AdminPageTemplate } from '@/templates/admin'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: "Отзывы"
};


export default async function ContentTestimonialsAdminPage() {
	await isProtected()
	const testimonialsRawData = await handleGetAllTestimonials()
	const data = TestimonialDbValidate.parse(testimonialsRawData.success)
	return (
			<AdminPageTemplate 
					title='Отзывы'
					description='Добавление, изменение и удаление отзывов с лендинга.'
					data={data}
					error={testimonialsRawData.error}
					columns={testimonialColumns}
					actionBtnType='addTestimonial'
					actionBtnText='Добавить новый отзыв'
					dialog={<TestimonialDialogs/>}
				/>
	);
}
