import { isProtected } from '@/shared/actions/auth'
import { handleGetAllPromos } from '@/shared/actions/promo'
import { PromoDbValidate } from '@/shared/types/validation/promo'
import { promoColumns } from '@/shared/ui/DataTable/columns/promo-columns'
import { PromoDialogs } from '@/shared/ui/DataTable/dialogs/promo-dialogs/promo-dialogs'
import { AdminPageTemplate } from '@/templates/admin'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: "Акции"
};


export default async function ContentPromoAdminPage() {
	await isProtected()
	const promoRawData = await handleGetAllPromos()
	const data = PromoDbValidate.parse(promoRawData.success)
	return (
			<AdminPageTemplate 
					title='Акции и спецпредложения'
					description='Добавление, изменение и удаление акций с лендинга.'
					data={data}
					error={promoRawData.error}
					columns={promoColumns}
					actionBtnType='addPromo'
					actionBtnText='Добавить новую акцию'
					dialog={<PromoDialogs/>}
				/>
	);
}
