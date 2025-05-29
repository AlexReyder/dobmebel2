"use client"
import { OrderMainType } from '@/shared/types/validation/orders'
import LongText from '@/shared/ui/long-text'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale/ru'
import { DataTableColumnHeader } from '../data-table-column-header'

export const ordersMainColumns: ColumnDef<OrderMainType>[] = [
		{
    id: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Имя' />
    ),
    cell: ({ row }) => {
      const cell= row.original.name
      return <LongText className='w-full'>{cell}</LongText>
    },
    meta: { className: 'w-36' },
  },
   {
    id: 'phone',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Номер телефона' />
    ),
    cell: ({ row }) => {
      const cell= row.original.phone
      return <LongText className='w-full'>{cell}</LongText>
    },
    meta: { className: 'w-36' },
  },
  {
    id:'createdAt',
    accessorKey:'createdAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Дата заявки' />
    ),
    cell: ({ row }) => {
      const cell = row.original.createdAt
      return(
       <div>{format(cell,"d.MM.yyyy h:mm ", {locale: ru})}</div>
      )
  	},
  },
]