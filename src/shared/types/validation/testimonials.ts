import { Platform } from '@prisma/client'
import { z } from 'zod'

export const testimonialsDb = z.object({
	id: z.string(),
	type: z.nativeEnum(Platform),
	quote: z.string(),
	author: z.string(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})
export type TestimonialType = z.infer<typeof testimonialsDb>
export const TestimonialDbValidate = testimonialsDb.array()

export const testimonialAdd = z.object({
	id: z.string(),
	type: z.nativeEnum(Platform),
	quote: z.string().nonempty('Обязательное поле'),
	author: z.string().nonempty('Обязательное поле'),
})
export type TestimonialAddType = z.infer<typeof testimonialAdd>
