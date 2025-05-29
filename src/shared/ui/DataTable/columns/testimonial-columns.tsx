"use client"
import { testimonialsRowActions } from '@/shared/constants/admin-columns-row'
import { TestimonialType } from '@/shared/types/validation/testimonials'
import LongText from '@/shared/ui/long-text'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale/ru'
import { DataTableColumnHeader } from '../data-table-column-header'
import { DataTableRowActions } from '../data-table-row-action'

export const testimonialColumns: ColumnDef<TestimonialType>[] = [
	{
      id: 'type',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Платформа' />
      ),
      cell: ({ row }) => {
        const cell= row.original.type
        let name = 'Яндекс'
        if(cell === 'GIS') {
          name = '2ГИС'
        }
        return <LongText className='w-full'>{name}</LongText>
      },
      meta: { className: 'w-36' },
  },
  {
    id: 'author',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Автор' />
    ),
    cell: ({ row }) => {
      const cell= row.original.author
      return <LongText className='w-full'>{cell}</LongText>
    },
    meta: { className: 'w-36' },
  },
  {
    id: 'quote',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Цитата' />
    ),
    cell: ({ row }) => {
      const cell= row.original.quote
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
      <DataTableRowActions row={row} actionsData={testimonialsRowActions} key={row.id}/>
    ),
  },
]