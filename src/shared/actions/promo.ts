"use server"

import { revalidatePath } from 'next/cache'
import { PromoAddType } from '../types/validation/promo'
import { prisma } from './prismaInstance'

export async function handleGetAllPromos(){
	try{
			const promos = await prisma.promo.findMany()
			return {
				success: promos, 
				error: null
			}
		} catch(e) {
			return {
				success: null,
				error: e as string
			}
		}
}

export async function handleAddPromo(data: PromoAddType){
	try{
		const promo = await prisma.promo.upsert({
			where: {
				id: data.id
			},
			create:{
				background: data.background,
				identifier: data.identifier
			},
			update:{
				background: data.background,
				identifier: data.identifier
			}
		})
		revalidatePath('/admin/content/promo')
		return {
			success: promo,
			error: null
		}
	} catch(e) {
			return {
			success: null,
			error: e as string
		}
	}
}

export async function handleDeletePromo(id: string){
		try{
			const promo = await prisma.promo.delete({where:{id}})
			revalidatePath('/admin/content/promo')
			return {
				success: promo,
				error: null
			};
		} catch(e){
			return {
				success: null,
				error: e as string
			}
		}
}