import { MainPageTemplate } from '@/templates/MainPageTemplate'

export default async function MainPage() {

  const rawData = await fetch(`${process.env.SITE_DOMAIN}/api/getData`, {
		cache:'no-store'
	})
	 const data = await rawData.json()


	return (
		<main>
			{data ? (<MainPageTemplate data={data}/>) : null }
		</main>
	)
}