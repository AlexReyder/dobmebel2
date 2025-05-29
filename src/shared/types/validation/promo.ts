import { z } from 'zod'

export const promoDb = z.object({
	id: z.string(),
	background: z.string(),
	identifier: z.string(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})
export type PromoType = z.infer<typeof promoDb>
export const PromoDbValidate = promoDb.array()

export const promoAdd = z.object({
	id: z.string(),
	background: z.string(),
	identifier: z.string().nonempty('Обязательно поле'),
})
export type PromoAddType = z.infer<typeof promoAdd>
