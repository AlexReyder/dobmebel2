"use server"

import { revalidatePath } from 'next/cache'
import { CasesAddType } from '../types/validation/cases'
import { prisma } from './prismaInstance'

export async function handleGetAllCases(){
	try{
			const cases = await prisma.cases.findMany()
			return {
				success: cases, 
				error: null
			}
		} catch(e) {
			return {
				success: null,
				error: e as string
			}
		}
}

export async function handleAddCase(data: CasesAddType){
	try{
		const cases = await prisma.cases.upsert({
			where: {
				id: data.id
			},
			create:{
				title: data.title,
				subtitle: data.subtitle,
				prodtime: data.prodtime,
				style: data.style,
				guarantee: data.guarantee,
				sizes: data.sizes,
				height: data.height,
				facade: data.facade,
				furniture: data.furniture,
				profile: data.profile,
				price: data.price,
				images: data.images,
			},
			update:{
				title: data.title,
				subtitle: data.subtitle,
				prodtime: data.prodtime,
				style: data.style,
				guarantee: data.guarantee,
				sizes: data.sizes,
				height: data.height,
				facade: data.facade,
				furniture: data.furniture,
				profile: data.profile,
				price: data.price,
				images: data.images,
			}
		})
		revalidatePath('/admin/content/cases')
		return {
			success: cases,
			error: null
		}
	} catch(e) {
			return {
			success: null,
			error: e as string
		}
	}
}

export async function handleDeleteCase(id: string){
		try{
			const user = await prisma.cases.delete({where:{id}})
			revalidatePath('/admin/content/cases')
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