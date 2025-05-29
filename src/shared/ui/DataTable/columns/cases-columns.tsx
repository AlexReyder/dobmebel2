"use client"
import { casesRowActions } from '@/shared/constants/admin-columns-row'
import { CasesType } from '@/shared/types/validation/cases'
import LongText from '@/shared/ui/long-text'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale/ru'
import { DataTableColumnHeader } from '../data-table-column-header'
import { DataTableRowActions } from '../data-table-row-action'

export const casesColumns: ColumnDef<CasesType>[] = [
	{
			id: 'title',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title='Заголовок' />
			),
			cell: ({ row }) => {
				const cell= row.original.title
				return <LongText className='w-full'>{cell}</LongText>
			},
			meta: { className: 'w-36' },
	},
	{
			id: 'subtitle',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title='Подзаголовок' />
			),
			cell: ({ row }) => {
				const cell= row.original.subtitle
				return <LongText className='w-full'>{cell}</LongText>
			},
			meta: { className: 'w-36' },
	},
	{
			id: 'prodtime',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title='Время изготовления' />
			),
			cell: ({ row }) => {
				const cell= row.original.prodtime
				return <LongText className='w-full'>{cell}</LongText>
			},
			meta: { className: 'w-36' },
	},
	{
			id: 'style',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title='Стили' />
			),
			cell: ({ row }) => {
				const cell= row.original.style
				return <LongText className='w-full'>{cell}</LongText>
			},
			meta: { className: 'w-36' },
	},
	{
			id: 'guarantee',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title='Гарантия' />
			),
			cell: ({ row }) => {
				const cell= row.original.guarantee
				return <LongText className='w-full'>{cell}</LongText>
			},
			meta: { className: 'w-36' },
	},
	{
			id: 'sizes',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title='Размеры' />
			),
			cell: ({ row }) => {
				const cell= row.original.sizes
				return <LongText className='w-full'>{cell}</LongText>
			},
			meta: { className: 'w-36' },
	},
	{
			id: 'height',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title='Высота' />
			),
			cell: ({ row }) => {
				const cell= row.original.height
				return <LongText className='w-full'>{cell}</LongText>
			},
			meta: { className: 'w-36' },
	},
	{
			id: 'facade',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title='Фасады' />
			),
			cell: ({ row }) => {
				const cell= row.original.facade
				return <LongText className='w-full'>{cell}</LongText>
			},
			meta: { className: 'w-36' },
	},
	{
			id: 'furniture',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title='Фурнитура' />
			),
			cell: ({ row }) => {
				const cell= row.original.furniture
				return <LongText className='w-full'>{cell}</LongText>
			},
			meta: { className: 'w-36' },
	},
	{
			id: 'profile',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title='Ручка-профиль' />
			),
			cell: ({ row }) => {
				const cell= row.original.profile
				return <LongText className='w-full'>{cell}</LongText>
			},
			meta: { className: 'w-36' },
	},
	{
			id: 'price',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title='Стоимость' />
			),
			cell: ({ row }) => {
				const cell= row.original.price
				return <LongText className='w-full'>{cell}</LongText>
			},
			meta: { className: 'w-36' },
	},
	{
		id:'createdAt',
		accessorKey:'createdAt',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Дата создания' />
		),
		cell: ({ row }) => {
			const cell = row.original.createdAt
			return(
			 <div>{format(cell,"d.MM.yyyy h:mm ", {locale: ru})}</div>
			)
		},
	},
	{
		id: 'actions',
		cell: ({row}) => (
			<DataTableRowActions row={row} actionsData={casesRowActions} key={row.id}/>
		),
	},
]