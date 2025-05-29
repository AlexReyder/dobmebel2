import { z } from 'zod'

export const orderMainDb = z.object({
	id: z.string(),
	name: z.string(),
	phone:z.string(),
	type: z.string(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})
export type OrderMainType = z.infer<typeof orderMainDb>
export const OrderMainValidate = orderMainDb.array()

export const orderQuizDb = z.object({
	id: z.string(),
	name: z.string(),
	phone:z.string(),
	data: z.object({
		question: z.string(),
		answer: z.string()
	}).array(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})
export type OrderQuizType = z.infer<typeof orderQuizDb>
export const OrderQuizValidate = orderQuizDb.array()