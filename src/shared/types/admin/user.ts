import { Role } from '@prisma/client'
import { z } from 'zod'

export const userDb = z.object({
	id: z.string(),
	email: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	middleName: z.string(),
	password: z.string(),
	phone:z.string(),
	role: z.nativeEnum(Role),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})
export type UserDbType = z.infer<typeof userDb>
export const UserDbValidate = userDb.array()

export const userAddSchema = z.object({
	firstName: z.string().nonempty('Обязательное поле'),
	lastName: z.string().nonempty('Обязательное поле'),
	middleName: z.string().nonempty('Обязательное поле'),
	email: z.string().email('Неверно указана электронная почта').nonempty('Обязательное поле'),
	password: z.string().min(8, {message: 'Минимальная длина пароля 8 символов'}).nonempty('Обязательное поле'),
	phone:z.string().nonempty('Обязательное поле'),
	role: z.nativeEnum(Role).default(Role.ADMIN).optional(),
})
export type UserAddType = z.infer<typeof userAddSchema>