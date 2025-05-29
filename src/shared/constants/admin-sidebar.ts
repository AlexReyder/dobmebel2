import { NavItem } from '../types/admin'
import { Icons } from '../ui/Sidebar/sidebar-icons'

export const navItems: NavItem[] = [
	{
		title: 'Заявки',
		slug:'orders',
		url: '/admin/orders',
		icon: Icons.order,
		shortcut: ['p', 'p'],
		isActive: true,
		items: [
				{
				title: 'Прямые',
				url: '/admin/orders/main',
				shortcut: ['m', 'm']
			},
				{
				title: 'Квиз',
				url: '/admin/orders/quiz',
				shortcut: ['m', 'm']
			},
		]
	},
	{
		title: 'Сотрудники',
		slug:'users',
		url: '/admin/users',
		icon: Icons.user,
		shortcut: ['p', 'p'],
		isActive: false,
		items: [] // No child items
	},
	{
		title: 'Контент',
		url: '#', // Placeholder as there is no direct link for the parent
		icon: Icons.content,
		isActive: true,
		items: [
			{
				title: 'Кейсы',
				url: '/admin/content/cases',
				shortcut: ['m', 'm']
			},
			{
				title: 'Акции',
				url: '/admin/content/promo',
				shortcut: ['m', 'm']
			},
				{
				title: 'Отзывы',
				url: '/admin/content/testimonials',
				shortcut: ['m', 'm']
			},
		]
	},
];