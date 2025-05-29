import { z } from 'zod'

export const signInSchema = z.object({
	email: z.string().email("Неккоректная электронная почта.").nonempty("Обязательное поле."),
	password: z.string().min(8, "Минимальная длинна пароля 8 символом").max(20,"Максимальная длинна пароля 20 символов.").nonempty("Обязательное поле."),
})
export type SignInType = z.infer<typeof signInSchema>

export const recoveryPasswordSchema = z.object({
		email: z.string().email("Неккоректная электронная почта.").nonempty("Обязательное поле."),
})
export type RecoveryPasswordType = z.infer<typeof recoveryPasswordSchema>

export const resetPasswordSchema = z.object({
  password: z.string().min(8, {message: 'Минимальная длинна пароля 8'}).max(20, {message: 'Максимальная длинна пароля 20 символов'}).nonempty({message: 'Поле не может быть пустым'}),
  confirmPassword:z.string().min(8, {message: 'Минимальная длинна пароля 8'}).max(20, {message: 'Максимальная длинна пароля 20 символов'}).nonempty({message: 'Поле не может быть пустым'})
}).refine((data) => data.password === data.confirmPassword, {
  message:"Пароли не совпадают",
  path:['confirmPassword']
})
export type ResetPasswordType = z.infer<typeof resetPasswordSchema>


export const signUpSchema = z.object({
	email: z.string().email("Неккоректная электронная почта.").nonempty(),
	firstName: z.string().min(1).max(30).optional(),
	lastName: z.string().min(1).max(30).optional(),
	middleName: z.string().min(3).max(30).optional(),
	password: z.string().min(8, "Минимальная длина пароля 8 символом").max(20,"Максимальная длина пароля 20 символов").nonempty(),
	phone:z.string().min(11).max(11).nonempty('Обязательное поле'),
})
export type SignUpType = z.infer<typeof signUpSchema>

export const updateProfileSchema = z.object({
	email: z.string().email("Неккоректная электронная почта.").nonempty(),
	firstName: z.string().min(1).max(30).optional(),
	lastName: z.string().min(1).max(30).optional(),
	middleName: z.string().min(3).max(30).optional(),
	password: z.string().min(8, "Минимальная длина пароля 8 символом").max(20,"Максимальная длина пароля 20 символов").nonempty(),
	phone:z.string().min(11).max(11).nonempty('Обязательное поле'),
})
export type UpdateProfileType = z.infer<typeof updateProfileSchema>