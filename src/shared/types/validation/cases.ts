import { z } from 'zod'

export const casesDb = z.object({
	id: z.string(),
	title: z.string(),
	subtitle:z.string(),
	prodtime: z.string(),
	style: z.string(),
	guarantee: z.string(),
	sizes: z.string(),
	height: z.string(),
	facade: z.string(),
	furniture: z.string(),
	profile: z.string(),
	price: z.string(),
	images: z.any(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})
export type CasesType = z.infer<typeof casesDb>
export const CasesDbValidate = casesDb.array()

export const casesAdd = z.object({
	id: z.string(),
	title: z.string(),
	subtitle:z.string(),
	prodtime: z.string(),
	style: z.string(),
	guarantee: z.string(),
	sizes: z.string(),
	height: z.string(),
	facade: z.string(),
	furniture: z.string(),
	profile: z.string(),
	price: z.string(),
	images: z.any(),
})
export type CasesAddType = z.infer<typeof casesAdd>
