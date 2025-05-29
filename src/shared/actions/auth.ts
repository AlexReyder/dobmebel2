"use server"

import { compareSync, genSaltSync, hash } from 'bcrypt'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { v4 as uuid } from 'uuid'
import { userAddSchema, UserAddType } from '../types/admin/user'
import { recoveryPasswordSchema, RecoveryPasswordType, resetPasswordSchema, ResetPasswordType, signInSchema, SignInType, updateProfileSchema, UpdateProfileType } from '../types/validation/auth'
import { mailPasswordRecovery } from './mail'
import { prisma } from './prismaInstance'
import { createSession, deleteSession, verifySession } from './session'

export async function handleSignIn(unsafeData: SignInType){
	const { success, data } = signInSchema.safeParse(unsafeData)
	if (!success){
    return {
      success: null,
      error:"Неправильно введенные данные."
    }
  }

	try{
		const user = await prisma.user.findFirst({where: {email: data.email}})
		if (!user || !compareSync(data.password, user.password)) {
				return {
					success: null,
					error:"Неверный логин или пароль."
				}
			}
  	await createSession(user.id, user.firstName)
		return {
			success: true,
			error: null
		}
	} catch(e){
		return {
			success: null,
			error: e as string
		}
	}
}

export async function handleSignUp(unsafeData: UserAddType) {
	const { success, data } = userAddSchema.safeParse(unsafeData)
	if (!success){
		return {
			success: null,
			error:"Неправильно введенные данные."
		}
	}

	try {
		const existingUser = await prisma.user.findFirst({where: {
				email: data.email
			}})

		if (existingUser){
			return {
				success: null,
				error:"Пользователь с такой электронной почтой уже существует."
			}
		}

		const hashedPassword = await hashPassword(data.password)
		await prisma.user.create({
			data: {
				firstName: data.firstName,
				lastName: data.lastName,
				middleName: data.middleName,
				email:data.email,
				phone: data.phone,
				role: data.role,
				password: hashedPassword,
				recoveryToken: uuid()
			},
		});
		
		revalidatePath('/admin/users')
		return {
			success: true,
			error: null
		}

	} catch(e) {
		return {
			success: null,
			error: e as string
		}
	}

}

export async function handleGetAllUsers(){
	try{
			const users = await prisma.user.findMany()
			return {
				success: users, 
				error: null
			}
		} catch(e) {
			return {
				success: null,
				error: e as string
			}
		}
}

export async function handleDeleteUser(id: string){
		try{
			const user = await prisma.user.delete({where:{id}})
			revalidatePath('/admin/users')
			return {
				success: user,
				error: null
			};
		} catch(e){
			return {
				success: null,
				error: e as string
			}
		}
}

export async function handleLogout() {
  try{
		await deleteSession()
		  redirect("/")
	} catch(e){
		return {
			success: null,
			error: e as string
		}
	}
}

export async function handleRecoveryPassword(unsafeData: RecoveryPasswordType){
	 const { success, data } = recoveryPasswordSchema.safeParse(unsafeData)
		if (!success){
				return {
					success: null, 
					error: 'Неправильно введенные данные.'
			}
		}

		try{
			const existingUser = await prisma.user.findFirst({where: {email: data.email}})

			if (!existingUser){
					return {
					success: null, 
					error: 'Пользователь с такой электронной почтой не найден.'
				}	
			}

			const { email, recoveryToken } = existingUser
			await mailPasswordRecovery(email, recoveryToken)
				return {
					success: true, 
					error: null
				}

		} catch(e){
			return {
					success: null, 
					error:  e as string
			}
		}
}

export async function handleResetPassword(email: string, token: string, unsafeData: ResetPasswordType){
	const { success, data } = resetPasswordSchema.safeParse(unsafeData)
	if (!success) return {
		success: null, 
		error: 'Неправильно введенные данные.'
	}

	const existingUser = await prisma.user.findFirst({where: {
		email
	}})

	if (!existingUser){
			return {
				success: null, 
				error: 'Пользователь с такой электронной почтой не найден.'
		}
	}

	if(existingUser.recoveryToken !== token){
			return {
				success: null, 
				error: 'Неправильный верификационный ключ.'
		}
	}

	try {
			const hashedPassword = await hashPassword(data.password)
			await prisma.user.update({
				where:{
					email
				},
				data:{
					password: hashedPassword,
					recoveryToken: uuid(),
				}
		})

		return {
			success: true, 
			error: null
		}

	} catch(error){
			 return {
			success: null, 
			error: error as string
		}
	}
}

export async function hashPassword(password: string) {
  return await hash(password, genSaltSync(10));
}

export async function isSuperAdmin(){
	try{
			const {userId} = await verifySession()
			const user = await prisma.user.findFirst({
				where: {
					id: userId as string
				}
			})

			if(!user){
				redirect('/admin/auth/signin')
			}

			if(user.role !== 'SUPERADMIN'){
				return {
					success: false,
					error: null
				}
			}

			return {
				success: true, 
				error: null
			}
		} catch(e) {
			return {
				success: null,
				error: e as string
			}
		}
}

export async function isProtected(){
		const {isAuth} = await verifySession();
		if(!isAuth){
			redirect('/admin/auth/signin')
		}
}

export async function handleGetProfile(){
	try{
			const {userId} = await verifySession()
			const user = await prisma.user.findFirst({
				where: {
					id: userId as string
				}
			})
			return {
				success: user, 
				error: null
			}
		} catch(e) {
			return {
				success: null,
				error: e as string
			}
		}
}

export async function handleUpdateProfile(unsafeData: UpdateProfileType) {
	const { success, data } = updateProfileSchema.safeParse(unsafeData)
	if (!success){
		return {
			success: null,
			error:"Неправильно введенные данные."
		}
	}

	try {
		const existingUser = await prisma.user.findFirst({where: {
				email: data.email
			}})

		if (!existingUser){
			return {
				success: null,
				error:"Пользователя не существует"
			}
		}

		const hashedPassword = await hashPassword(data.password)
		await prisma.user.update({
			where:{
				email: data.email
			},
			data: {
				firstName: data.firstName,
				lastName: data.lastName,
				middleName: data.middleName,
				email:data.email,
				phone: data.phone,
				password: hashedPassword,
				recoveryToken: uuid()
			},
		});
		
		revalidatePath('/admin/profile')
		return {
			success: true,
			error: null
		}

	} catch(e) {
		return {
			success: null,
			error: e as string
		}
	}

}