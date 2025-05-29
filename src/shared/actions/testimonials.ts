"use server"

import { revalidatePath } from 'next/cache'
import { TestimonialAddType } from '../types/validation/testimonials'
import { prisma } from './prismaInstance'

export async function handleGetAllTestimonials(){
	try{
			const testimonials = await prisma.testimonials.findMany()
			return {
				success: testimonials, 
				error: null
			}
		} catch(e) {
			return {
				success: null,
				error: e as string
			}
		}
}

export async function handleAddTestimonial(data: TestimonialAddType){
	try{
		const testimonials = await prisma.testimonials.upsert({
			where: {
				id: data.id
			},
			create:{
				type: data.type,
				quote: data.quote,
				author: data.author
			},
			update:{
				type: data.type,
				quote: data.quote,
				author: data.author
			}
		})
		revalidatePath('/admin/content/testimonials')
		return {
			success: testimonials,
			error: null
		}
	} catch(e) {
			return {
			success: null,
			error: e as string
		}
	}
}

export async function handleDeleteTestimonial(id: string){
		try{
			const testimonial = await prisma.testimonials.delete({where:{id}})
			revalidatePath('/admin/content/testimonials')
			return {
				success: testimonial,
				error: null
			};
		} catch(e){
			return {
				success: null,
				error: e as string
			}
		}
}