import { prisma } from '@/shared/actions/prismaInstance'

export async function GET(req: Request) {
		const cases = await prisma.cases.findMany();
		const promos = await prisma.promo.findMany();
		const testimonials = await prisma.testimonials.findMany();
		const data = {
			cases,
			promos,
			testimonials
		}
		return new Response(JSON.stringify(data), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
}
