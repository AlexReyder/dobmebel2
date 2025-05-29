"use server"

import { prisma } from './prismaInstance'


export async function getMainOrders(){
		try{
				const orders = await prisma.order.findMany()
				return {
					success: orders, 
					error: null
				}
			} catch(e) {
				return {
					success: null,
					error: e as string
				}
			}
}

export async function getQuizOrders(){
		try{
				const orders = await prisma.quiz.findMany()
				return {
					success: orders, 
					error: null
				}
			} catch(e) {
				return {
					success: null,
					error: e as string
				}
			}
}