import {
	Edit,
	Trash2
} from 'lucide-react'
import { RowActionItem, TableActionDialogs } from '../types/admin'

export const userRowActions: RowActionItem[] = [
	{
		action: 'deleteUser',
		title: 'Удалить',
		icon: <Trash2 size={16}/>
	}
]

export const userActionDialogs: TableActionDialogs = {
	add: {
		action: 'addUser',
		key: 'add-user-',
	},
	// delete: {
	// 	action: 'deleteUser',
	// 	key: 'delete-user-'
	// }
}


export const casesRowActions: RowActionItem[] = [
	{
		action: 'updateCase',
		title: 'Изменить',
		icon: <Edit size={16}/>
	},
	{
		action: 'deleteCase',
		title: 'Удалить',
		icon: <Trash2 size={16}/>
	},
]

export const testimonialsRowActions: RowActionItem[] = [
	{
		action: 'updateTestimonial',
		title: 'Изменить',
		icon: <Edit size={16}/>
	},
	{
		action: 'deleteTestimonial',
		title: 'Удалить',
		icon: <Trash2 size={16}/>
	},
]

export const promoRowActions: RowActionItem[] = [
	{
		action: 'updatePromo',
		title: 'Изменить',
		icon: <Edit size={16}/>
	},
	{
		action: 'deletePromo',
		title: 'Удалить',
		icon: <Trash2 size={16}/>
	},
]