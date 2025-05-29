import { isProtected } from '@/shared/actions/auth'
import { handleGetAllCases } from '@/shared/actions/cases'
import { CasesDbValidate } from '@/shared/types/validation/cases'
import { casesColumns } from '@/shared/ui/DataTable/columns/cases-columns'
import { CaseDialogs } from '@/shared/ui/DataTable/dialogs/case-dialogs/case-dialogs'
import { AdminPageTemplate } from '@/templates/admin'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: "Кейсы"
};


export default async function ContentCasesAdminPage() {
	await isProtected()
	const casesRawData = await handleGetAllCases()
	console.log(casesRawData)
	const data = CasesDbValidate.parse(casesRawData.success)
	return (
			<AdminPageTemplate 
					title='Кейсы'
					description='Добавление, изменение и удаление кейсов с лендинга.'
					data={data}
					error={casesRawData.error}
					columns={casesColumns}
					actionBtnType='addCase'
					actionBtnText='Добавить новый кейс'
					dialog={<CaseDialogs/>}
				/>
	);
}
